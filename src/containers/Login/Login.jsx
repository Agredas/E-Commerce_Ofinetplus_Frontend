import React from 'react';
import axios from 'axios';
import './Login.scss';
import {notification} from 'antd';
import KeyIcon from 'mdi-react/KeyIcon';

const validateAndSend = async (props, credentials) =>{
  if (credentials.password === "" || credentials.email === ""){
    notification.error({message:'Error!',description:'Required fields are empty.'})
  }else{
    axios.post(process.env.REACT_APP_BASE_URL + '/api/user/login', user)
    console.log('axios done')
    localStorage.setItem('authToken',res.data.token);
    localStorage.setItem('user',JSON.stringify(res.data))
    setUser(res.data)
    notification.success({message:'Welcome!',description:'Welcome to our application! '+user.email})
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
        * Password:
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