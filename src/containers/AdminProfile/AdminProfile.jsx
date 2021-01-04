import React from 'react';
import axios from 'axios'
import './Profile.scss';
import Footer from '../../components/Footer/Footer'
import {Link} from 'react-router-dom';
import { useHistory } from "react-router";
import { notification  } from 'antd';

const AdminProfile = ({setClient}) =>{
  const history = useHistory();

  const logout = async () =>{
    try{
      let token= localStorage.getItem('authToken')
      const options = {
        headers: {Authorization: `Bearer ${token}`}
      }
      console.log(token)
      await axios.gest('http://localhost:8000/api/user/logout',{}, options)
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
        return (
        <div className='profile'>
          <div className='header'>
              <div className='icon'></div>
          </div>
          <div className='buttons'>
              <Link to='/productsAdmin'>Productos</Link>
              <div className='hole1'></div>
              <Link to='/ordersAdmin'>Pedidos</Link>
          </div>
          <div className='logout'>
            <div>
              <button className='logout-button' onClick={logout}>Salir</button>
            </div>
          </div>
          <Footer />
        </div>
        )
}

export default AdminProfile;