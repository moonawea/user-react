import React, {useState} from "react";
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";

const Create = () => {
    const [values, setValues] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        apartment: ''
    })

    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('https://jsonplaceholder.typicode.com/users', values)
            .then(res => {
                console.log(res)
                navigate('/')
            })
    }

    return (
        <div>
            <div>
                <h1>Add a User</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input type="text" name="name" className={"form-control"} placeholder={"Enter Name"}
                               onChange={e => setValues({...values, name: e.target.value})}/>
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input type="email" name="email" className={"form-control"} placeholder={"Enter Email"}
                               onChange={e => setValues({...values, email: e.target.value})}/>
                    </div>
                    <div>
                        <label htmlFor="">Phone:</label>
                        <input type="number" name="phone" className={"form-control"} placeholder={"Enter Phone"}
                               onChange={e => setValues({...values, phone: e.target.value})}/>
                    </div>
                    <div>
                        <label htmlFor="name">Address:</label>
                        <input type="text" name="address" className={"form-control"} placeholder={"Enter Address"}
                               onChange={e => setValues({...values, address: e.target.value})}/>
                    </div>
                    <div>
                        <label htmlFor="name">Apartment:</label>
                        <input type="text" name="apartment" className={"form-control"} placeholder={"Enter Apartment"}
                               onChange={e => setValues({...values, apartment: e.target.value})}/>
                    </div>
                    <button>Submit</button>
                    <Link to={"/"}>Back</Link>
                </form>
            </div>
        </div>

    )
}
export default Create;