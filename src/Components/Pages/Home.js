import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";


const Home = () => {
    const [users, setUser] = useState([])
    const navigate = useNavigate();


    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(({data}) => {
                setUser(data)
                console.log(data)
            })
            .catch(err => console.log(err))
    }, [])

    const handleDelete = (id) => {
        const confirm = window.confirm("would you like delete?")
        if (confirm) {
            axios.delete('https://jsonplaceholder.typicode.com/users' + id)
                .then(res => {
                    navigate('/')
                }).catch(err => console.log(err))
        }
    }

    return (
        <div className={"container"}>
            <h1>List of Users</h1>
            <div className={""}>
                <div>
                    <Link to="/create" className={"add_link"}>Add +</Link>
                </div>
                <table>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Address</th>
                        <th>Apartment</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        users.map((d, i) => (
                            <tr key={i}>
                                <td>{d.id}</td>
                                <td>{d.name}</td>
                                <td>{d.email}</td>
                                <td>{d.phone}</td>
                                <td>{d.address.street}</td>
                                <td>{d.address.suite}</td>
                                <td>
                                    <Link to={`/read/${d.id}`}  className={"read_link"}>Read</Link>
                                    <Link to={`/update/${d.id}`} className={"edit_link"}>Edit</Link>
                                    <button className={"delete_link"} onClick={ e => handleDelete(d.id)}>Delete</button>
                                </td>
                            </tr>
                            )
                        )
                    }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Home;