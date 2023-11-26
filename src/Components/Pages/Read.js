import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link, useParams} from "react-router-dom";

const Read = () => {

    const [users, setUser] = useState([])
    const {id} = useParams();

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users/' + id)
            .then(({data}) => {
                setUser(data)
                console.log(data)
            })
            .catch(err => console.log(err))
    }, [])


    return (
        <div>
            <div>
                <h3>Detail of User</h3>
                <div>
                    <strong>Name: {users.name}</strong>
                </div>
                <div>
                    <strong>Email: {users.email}</strong>
                </div>
                <div>
                    <strong>Phone: {users.phone}</strong>
                </div>
                {/*<div>*/}
                {/*    <strong>Address: {users.address.street}</strong>*/}
                {/*</div>*/}
                {/*<div>*/}
                {/*    <strong>Apartment: {users.apartment.suite}</strong>*/}
                {/*</div>*/}
                <Link to={`/update/${id}`}>Update</Link>
                <Link to="/">Back</Link>
            </div>
        </div>
    )
}
export  default Read;