import React from 'react';
import { Link } from 'react-router-dom'
import './Header.scss';
import LogoOfiplus from '../../img/LogoOfiplus.png'
import axios from 'axios';
import {notification} from 'antd';
import {useHistory} from 'react-router';


const Header = ({setClient}) =>{
  const history = useHistory();

  const logout = async () =>{
    try{
      let token= localStorage.getItem('authToken')
      const options = {
        headers: {Authorization: `Bearer ${token}`}
      }
      console.log(token)
      await axios.post('http://localhost:8000/api/user/logout',{}, options)
      localStorage.removeItem('client')
      localStorage.removeItem('authToken')
      setClient(null)
      notification.success({message:'¡Adiós!',description:'Esperamos verte pronto.'})
        setTimeout(() => {
            history.push('/')
        }, 1000); 
    }catch (error) {
      console.log(error);
    }
  }
  return(
    <div className="header2">
        <div className="header2-top">
          <div className="header2-top-logo">
             <img src={LogoOfiplus} className="imgLogoHeader"></img>
          </div>
          <div className="header2-top-buttons">
            <Link className="buttonheader" to="/store">Tienda</Link>
            <Link className="buttonheader" to="/clientprofile">Perfil</Link>
            <Link className="buttonheader" to="/contact">Contacto</Link>
            <button className='buttonheader' onClick={logout}>Salir</button>
        </div>
      </div>
    </div>
  )
}

export default Header;