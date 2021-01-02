import React from 'react';
import axios from 'axios';
import './Register.scss';
import {Input, notification } from 'antd';


const Register = () =>{

    const handleSubmit = event =>{
        event.preventDefault(); 
        const clientBody={
            name: event.target.name.value,
            surnames: event.target.surnames.value,
            address: event.target.address.value,
            city: event.target.city.value,
            phone: event.target.phone.value,
            email: event.target.email.value,
            password: event.target.password.value
        };
        axios.post('http://localhost:8000/api/user/register', clientBody)
        .then(res => {
            console.log(res.data)
            notification.success({ message :'Cliente registrado.',description:'Cliente registrado con éxito.'})
        }).catch(error => {
            console.log(error)
            notification.error({ message: 'Error de registro.', description: 'Ha habido un error intentando registrar el cliente.' })
        })
    }


  return (

    <div className='form-log-reg'>

        <form className="register-form" onSubmit={handleSubmit}>
        <Input type="name" name="name" required placeholder="Write your name" />
        <Input type="surnames" name="surnames" required placeholder="Write your surnames" />
        <Input type="address" name="address" required placeholder="Write your adress" />
        <Input type="city" name="city" required placeholder="Write your city" />
        <Input type="phone" name="phone" required placeholder="Write your phone" />
        <Input type="email" name="email" required placeholder="Write your email" />
        <Input type="password" name="password" required placeholder="Write your password" />
        <button className='buttonRegister' type="primary" htmlType="submit">Sign up</ button>
        </form>
    
    </div>
  )
}

export default Register;