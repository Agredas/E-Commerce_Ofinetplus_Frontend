import React from 'react';
import axios from 'axios';
import {notification } from 'antd';
import PlusBox from 'mdi-react/PlusBox'


const CreateProduct = () =>{
  const handleSubmit = event =>{
        event.preventDefault(); 
        const productBody={
          name: event.target.name.value,
          description: event.target.description.value,
          price: event.target.price.value,
          image: event.target.image_path.value,
          category_id: event.target.category_id.value,
        };
        axios.post('http://localhost:8000/api/product/add', productBody)
        .then(res => {
            console.log(res.data)
            notification.success({ message :'Producto creado con éxito.',description:'Producto creado con éxito.'})
        }).catch(error => {
            console.log(error)
            notification.error({ message: 'Error de creación.', description: 'Ha habido un error intentando crear el producto.' })
        })
    }


  return (

    <div className='form-log-reg'>

        <form className="register-form" onSubmit={handleSubmit}>
          <label>* Nombre: <input className='input' type="text" name="name" required/></label>
          <label>* Descripción: <input className='input' type="text" name="description" required/></label>
          <label>* Precio: <input className='input' type="text" name="price" required /></label>
          <label>* Imagen: <input className='input' type="text" name="image" required/></label>
          <label>* ID Categoría: <input className='input' type="text" name="category_id" required /></label>
      
          <div className="button-log-reg">
            <button className='button-log-reg' type="primary" htmlType="submit"><PlusBox className="verticalAlignIcons" />Añadir</ button>
          </div>
      </form>
    
    </div>
  )
}

export default CreateProduct;