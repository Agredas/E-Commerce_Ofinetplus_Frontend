import React, {useState} from 'react';
import './Home.scss';
import LogoOfiplus from '../../img/LogoOfiplus.png'
import { Carousel } from 'antd';
import Footer from '../../components/Footer/Footer'
import Modal from '../../components/Modal/Modal';
import Login from '../Login/Login';
import Register from '../Register/Register';
import AccountKey from 'mdi-react/AccountKeyIcon'
import UserAccount from 'mdi-react/CardAccountDetailsIcon';

function Home () {

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
        <div className="header-top">
          <div className="header-top-logo">
            <img src={LogoOfiplus} className="imgLogo"></img>
          </div>
          <div className="header-top-buttons">
              <button className="general-button" onClick={() => {showModalRegister()}}>Registro </button>
              <Modal show={showRegister} handleClose={hideModalRegister} title={'Registro'} icon={<UserAccount className='verticalAlignIcons'/>}>
                <Register />
              </Modal>
              <div className="hole-firstview"></div>
              <button className="general-button" onClick={() => {showModalLogin()}}>Acceso</button>
              <Modal show={showLogin} handleClose={hideModalLogin} title={'Acceso'} icon={<AccountKey className='verticalAlignIcons'/>}>
                <Login />
              </Modal>
          </div>
        </div>
      </div>
      
      <div className="carrusel1">
        <div className="imgCarrusel">
          <Carousel dots={false} autoplay={onChange}>
            <div className="image1">
            </div>
            <div className="image2">
            </div>
            <div className="image3">
            </div>
            <div className="image4">
            </div>
          </Carousel>
        </div>
        </div>
        
      <div className="carrusel2">
        <div className="senCarrusel">
          <Carousel dots={false} autoplay={onChange}>
            <div>Equipos informáticos a tu medida
            </div>
            <div>Servicio técnico para solucionar tus fallos
            </div>
            <div>Programas de contabilidad para empresas y autónomos
            </div>
            <div>Los mejores productos con buena relación calidad-precio
            </div>
          </Carousel>
        </div>
        </div>

        <Footer/>
  </div>

  )
}

export default Home;