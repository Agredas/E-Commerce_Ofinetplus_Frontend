import React, { useState } from 'react';
import axios from 'axios';
import {useHistory} from 'react-router';
import './Login.scss';
import {notification} from 'antd';
import KeyIcon from 'mdi-react/KeyIcon';

const validateAndSend = async (props, credentials) =>{
  if (credentials.password === "" || credentials.email === ""){
    notification.error({message:'Error!',description:'Required fields are empty.'})
  }else{
    axios.post(process.env.REACT_APP_BASE_URL + '/api/user/login')
    notification.success({message:'Welcome!',description:'Welcome to our application!'})
    history.push('/shop')
  }
};

function Login(props){
  const [login, setLogin]= useState({
    email: "",
    password: "",
  });

  const eventHandler = (ev) =>{
    setLogin({ ...login, [ev.target.name]: ev.target.value})
  };

  return (
    <div className='form-log-reg'>
      <label>
        * Email:
        <input
          className="input"
          type="text"
          name="email"
          required
          onChange={eventHandler}
        />
      </label>
      <label>
        * Contraseña:
        <input
          className="input"
          type="password"
          name="password"
          required
          onChange={eventHandler}
        />
      </label>

      <div className="button-log-reg">
      <button className="button-login-size" onClick={async () => {
          try {
            await validateAndSend(props, login);
          } catch (err) {
            notification.error({message:'Error!',description:'Wrong credentials.'})
          }
        }}
      >
        <KeyIcon className="verticalAlignIcons" />
        {" "}
        Login{" "}
      </button>
      </div>
    </div>
  );
}

export default Login;