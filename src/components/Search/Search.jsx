import React, { useEffect, useState } from 'react';
import { Button } from 'arwes';
import axios from 'axios'
import './Search.scss';
import MagnifyIcon from 'mdi-react/MagnifyIcon';


const Search = (props) => {

  useEffect(() => {
    try {


    } catch (err) {
      console.log(err);
    }
  }, []);
  const [search, setSearch] = useState("");

  const eventHandler = (ev) => {
    setSearch(ev.target.value)
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      axios.get('http://localhost:8000/api/product/name/{name}')
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="field-search">
        <div className="control">
          <input
            className="inputSearch"
            onChange={eventHandler}
            type="text"
          />
        </div>
        <div className="control">
          <Button className="button is-info" >
            <MagnifyIcon className='verticalAlignIcons' />Buscador
          </Button>
        </div>
      </div>
    </form>
  )
}

export default Search;