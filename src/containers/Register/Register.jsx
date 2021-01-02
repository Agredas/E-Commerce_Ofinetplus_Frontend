import React from 'react';
import axios from 'axios';
import './Register.scss';
import {notification } from 'antd';
import AccountPlusIcon from 'mdi-react/AccountPlusIcon'


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
          <label>* Nombre: <input className='input' type="text" name="name" required/></label>
          <label>* Apellidos: <input className='input' type="text" name="surnames" required/></label>
          <label>* Dirección: <input className='input' type="text" name="address" required /></label>
          <label>* Ciudad: <input className='input' type="text" name="city" required/></label>
          <label>* Teléfono: <input className='input' type="text" name="phone" required /></label>
          <label>* Email: <input className='input' type="email" name="email" required /></label>
          <label>* Contraseña: <input className='input' type="password" name="password" required /></label>
      
          <div className="button-log-reg">
            <button className='button-log-reg' type="primary" htmlType="submit"><AccountPlusIcon className="verticalAlignIcons" />Sign up</ button>
          </div>
      </form>
    
    </div>
  )
}

export default Register;