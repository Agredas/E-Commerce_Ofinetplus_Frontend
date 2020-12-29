  
import React from 'react';
import './Register.scss';
import {notification } from 'antd';
import axios from 'axios';
import AccountPlusIcon from 'mdi-react/AccountPlusIcon'

const validationErrorMessages = {
  errorPassword: 'Password must contain a minimum of 8 characters, 1 special character, 1 capital letter and at least 1 number.',
  errorEmptyRequired: 'Required inputs came empty.',
  errorEquealPassword: 'Password did not match.',
}

const doRegister = async (register, props) => {
  try {
    const resRegister = axios.post(process.env.REACT_APP_BASE_URL + '/api/user/register', user);
    console.log(resRegister.data);
    notification.success({message:'Welcome!', description:`Thank you for making an account with us, ${register.name}.`})
  } catch (err) {
    throw err;
  }
}
const validateAndSend = async (register, props) => {
  try {
    let notificationMessage = [];
    let allOk = true;
    const passRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    if (register.name === "" || register.surnames === "" || register.address === "" || register.city === "" || register.phone === "" ||register.email === "" || register.password === "") {
      notificationMessage.push(validationErrorMessages.errorEmptyRequired);
      allOk = false;
    }
    if ((register.password !== register.rePassword)) {
      notificationMessage.push(validationErrorMessages.errorEqualPassword)
      allOk = false;
    }
    if (!passRegex.test(register.password)) {
      notificationMessage.push(validationErrorMessages.errorPassword)
      allOk = false;
    }
    console.log(notificationMessage)
    if (allOk) {
      axios.post(process.env.REACT_APP_BASE_URL + '/api/user/register', register, props);
      console.log(res.data)
      notification.success({ message :'Registered client.',description:'Succesfully registered client.'})
    } else {
      notification.error({ message: 'Registration error.', description: 'There was an error trying to register the client.' })
    }
  } catch (err) {
    console.log(err.message)
    notification.error({ message: 'Error!', description: 'There was an error trying to register the client.' })
  }

}
function Register(props) {
  const [register, setRegister] = useState({
    name: "",
    surnames: "",
    address: "",
    city: "",
    phone: "",
    email: "",
    password: "",
    rePassword: ""
  });

  const eventHandler = (ev) => {
    setRegister({ ...register, [ev.target.name]: ev.target.type !== "checkbox" ? ev.target.value : ev.target.checked });
  };

  return (

    <div className='form-log-reg'>

      <label>* Nombre: <input className='input' type="text" name="name" required onChange={eventHandler} /></label>
      <label>* Apellidos: <input className='input' type="text" name="surnames" required onChange={eventHandler} /></label>
      <label>* Dirección: <input className='input' type="text" name="address" required onChange={eventHandler} /></label>
      <label>* Ciudad: <input className='input' type="text" name="city" required onChange={eventHandler} /></label>
      <label>* Teléfono: <input className='input' type="text" name="phone" required onChange={eventHandler} /></label>
      <label>* Email: <input className='input' type="email" onChange={eventHandler} name="email" required /></label>
      <label>* Contraseña: <input className='input' type="password" onChange={eventHandler} name="password" required /></label>
      <label>* Confirmar Contraseña: <input className='input' onChange={eventHandler} type="password" name="rePassword" required /></label>

    <div className="button-log-reg">
      <button onClick={async () => {
        try {
          const ok = await validateAndSend(register, props);
          if (ok) {
            setTimeout(() => {
              props.handleClose();
            }, 1000);
          }
        } catch (err) {
          console.log(err.message)
        }
        
      }}><AccountPlusIcon className="verticalAlignIcons" /> Register </button>
      </div>
    </div>
  )
}

export default Register;