import React, {useEffect, useState} from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
import axios from "axios";

const Update = () => {

    // const [users, setUser] = useState([])
    const {id} = useParams();
    const [values, setValues] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        apartment: ''
    })

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users/' + id)
            .then(res => {
                setValues(res.data)
            })
            .catch(err => console.log(err))
    }, [])

    const navigate = useNavigate();
    const handleUpdate = (event) => {
        event.preventDefault();
        axios.put('https://jsonplaceholder.typicode.com/users' + id, values)
            .then(res => {
                console.log(res)
                navigate('/')
            })
    }


    return (
        <div>
            <div>
                <div>
                    <h1>Add a User</h1>
                    <form onSubmit={handleUpdate}>
                        <div>
                            <label htmlFor="name">Name:</label>
                            <input type="text" name="name" className={"form-control"} placeholder={"Enter Name"}
                                   value={values.name}
                                   onChange={e => setValues({...values, name: e.target.value})}/>
                        </div>
                        <div>
                            <label htmlFor="email">Email:</label>
                            <input type="email" name="email" className={"form-control"} placeholder={"Enter Email"}
                                   value={values.email}
                                   onChange={e => setValues({...values, email: e.target.value})}/>
                        </div>
                        <div>
                            <label htmlFor="">Phone:</label>
                            <input type="number" name="phone" className={"form-control"} placeholder={"Enter Phone"}
                                   value={values.phone}
                                   onChange={e => setValues({...values, phone: e.target.value})}/>
                        </div>
                        <div>
                            <label htmlFor="name">Address:</label>
                            <input type="text" name="address" className={"form-control"} placeholder={"Enter Address"}
                                   value={values.address}
                                   onChange={e => setValues({...values, address: e.target.value})}/>
                        </div>
                        <div>
                            <label htmlFor="name">Apartment:</label>
                            <input type="text" name="apartment" className={"form-control"}
                                   placeholder={"Enter Apartment"}
                                   value={values.apartment}
                                   onChange={e => setValues({...values, apartment: e.target.value})}/>
                        </div>
                        <button>Edit</button>
                        <Link to={"/"}>Back</Link>
                    </form>
                </div>
            </div>
        </div>
    )

}
export default Update;