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
          <div className="header-top-buttons">
            <Link className="general-button" to="/store">Tienda</Link>
            <div className="hole-header"></div>
            <Link className="general-button" to="/clientprofile">Perfil</Link>
            <div className="hole-header"></div>
            <button className='general-button' onClick={logout}>Salir</button>
            <div className="cart">Carrito         
                <Link to="/cart">
                    <i className="shopping"></i>
                </Link>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Header;