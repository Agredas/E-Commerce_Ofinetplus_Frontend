import React from 'react';
import axios from 'axios';
import './Login.scss';
import {useHistory} from 'react-router';
import {notification} from 'antd';
import KeyIcon from 'mdi-react/KeyIcon';


const Login = () => {
  const history = useHistory();
  const handleSubmit = event =>{
    event.preventDefault(); // to prevent refreshing the page
    const client ={
        email:event.target.email.value,
        password:event.target.password.value
    };
    console.log(client)
    axios.post('http://localhost:8000/api/user/login', client)
    .then(res=>{
      localStorage.setItem('authToken',res.data.token);
      localStorage.setItem('client',JSON.stringify(res.data))
      notification.success({message:'¡Bienvenid@!',description:'¡Gracias por volver!'})
      history.push('/adminprofile')
    })
    .catch(error=> {throw (error)})
}

  return (
    <div className='form-log-reg'>
      <form className='login-form' onSubmit={handleSubmit}>
        <label>
          * Email:
          <input
            className="input"
            type="text"
            name="email"
            required
          />
        </label>
        <label>
          * Contraseña:
          <input
            className="input"
            type="password"
            name="password"
            required
          />
        </label>

        <div className="button-log-reg">
          <button className='button-log-reg' type="primary" htmlType="submit"><KeyIcon className="verticalAlignIcons" />Acceder</ button>
        </div>
      </form>
    </div>
  );
}

export default Login;