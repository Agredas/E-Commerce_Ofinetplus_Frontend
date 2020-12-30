import React, {useState} from 'react';
import './Preview.scss';
import LogoOfiplus from '../../img/LogoOfiplus.png'
import { Carousel } from 'antd';
import Footer from '../../components/Footer/Footer'
import Modal from '../../components/Modal/Modal';
import Login from '../Login/Login';
import Register from '../Register/Register';
import AccountKey from 'mdi-react/AccountKeyIcon'
import UserAccount from 'mdi-react/CardAccountDetailsIcon';

function Preview () {

  function onChange(a) {
    console.log(a);
  }

  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const showModalRegister = () => {setShowRegister(true);};
  const hideModalRegister = () => {setShowRegister(false);};

  const showModalLogin = () => {setShowLogin(true);};
  const hideModalLogin = () => {setShowLogin(false);};

  return (
    <div>

      <div className="header">
        <div className="header_top">
          <div className="header_top_logo">
            <img src={LogoOfiplus} className="imgLogo"></img>
          </div>
          <div className="header_top_buttons">
              <button className="reg-log-button" onClick={() => {showModalLogin()}}>Login</button>
              <Modal show={showLogin} handleClose={hideModalLogin} title={'Login'} icon={<AccountKey className='verticalAlignIcons'/>}>
                <Login />
              </Modal>
              <button className="reg-log-button" onClick={() => {showModalRegister()}}>Register </button>
              <Modal show={showRegister} handleClose={hideModalRegister} title={'Register'} icon={<UserAccount className='verticalAlignIcons'/>}>
                <Register />
              </Modal>
          </div>
        </div>
      </div>

        <div className="imgCarrusel">
          <Carousel dots={false} autoplay={onChange}>
            <div className="imagen1">
            </div>
            <div className="imagen2">
            </div>
            <div className="imagen3">
            </div>
            <div className="imagen4">
            </div>
          </Carousel>
        </div>
  </div>

  )
}

export default Preview;