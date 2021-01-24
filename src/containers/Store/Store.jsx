import axios from 'axios';
import Catalog from "../../components/Catalog/Catalog";
import Footer from "../../components/Footer/Footer";
import "./Store.scss";
import Header from "../../components/Header/Header";
import { useEffect, useState } from "react";
import Search from '../../components/Search/Search';
import React, { useEffect, useState } from 'react';import axios from 'axios';
import { notification  } from 'antd';


const Store = ({client, setClient}) =>{

  const [products,setProducts] = useState([]);
  useEffect(()=>{
    const options = { headers: { Authorization: `Bearer ${client.token}` }};
    axios.get('http://localhost:8000/api/product/showAll', options)
    .then((res) =>{
      console.log(res.data)
      setProducts(res.data);
    }).catch((error) =>{
      console.log(error);
    })
  },[])

  return (
      <div className='productClientProfile'>
        <div className='productContainer'>
          {products?.map(product =>
              <div key={appointment._id} className='infoAppointment'>
              <div className='inside'>{product.name}</div>
              <div className='inside'>{product.description}</div>
              <div className='inside'>{product.price}</div>
              <div className='inside'>{product.image}</div>
              <div className='inside'>{product.category_id}</div>
            </div>)}
        </div>
      </div>
        )
}

export default Store;