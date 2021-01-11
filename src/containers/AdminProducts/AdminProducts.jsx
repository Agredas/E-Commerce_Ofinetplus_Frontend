import React, { useEffect, useState } from 'react';import axios from 'axios';
import './AdminProducts.scss';
import { notification  } from 'antd';

const AdminProducts = ({client, setClient}) =>{
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

  const deleteProduct = async (id) =>{
    const options = { headers: { Authorization: `Bearer ${token}` }};
    await axios.delete('http://localhost:8000/api/product/' + id, options)
    notification.success({message:'Producto cancelado.', description:'El producto ha sido eliminado con éxito.'})
    await axios.get('http://localhost:8000/api/product/showAll', options)
    .then((res) =>{
      console.log(res.data)
      setProducts(res.data);
    }).catch((error) =>{
      console.log(error);
    })
  }

  return (
      <div className='productAdminProfile'>
        <div className='productContainer'>
          {products?.map(product =>
              <div key={appointment._id} className='infoAppointment'>
              <div className='inside'>{product.name}</div>
              <div className='inside'>{product.description}</div>
              <div className='inside'>{product.price}</div>
              <div className='inside'>{product.image}</div>
              <div className='inside'>{product.category_id}</div>
              <div className='buttondelete'>
                <button className='deleteButton' onClick={()=> {deleteProduct(product.id)}}>X</button>
              </div>
            </div>)}
        </div>
      </div>
      
        )
}

export default AdminProducts;