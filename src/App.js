import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Header from './Components/Header';
import Search from './Components/Search';
import Character from './Components/Character';
import Pagination from './Components/Pagination';
import './App.css';

const App = () => {
  const [items,setItems] = useState([])
  const [isLoading,setIsLoading] = useState(true)
  const [query, setQuery] = useState('')

//page
//--------------------
const [currentPage,setCurrentpage] = useState(1);
const [itemsPerPage] = useState(8);
//-------------------
  useEffect(() => {
    const fetchItems = async () =>{
      setIsLoading(true)
      const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`)

      console.log(result.data)

      setItems(result.data)
      setIsLoading(false)
    }
    fetchItems();
  },[query])
//-------------------------
  const indexOfLastitem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastitem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem,indexOfLastitem);
//------------------------

//change page
const paginate = pageNumber => setCurrentpage(pageNumber);

  return (
    <div className="AppContainer">
      <Header/>
      <Search getQuery={(q)=> setQuery(q)}/>
      {/* <Character isLoading={isLoading} items={items}/> */}
      <Character isLoading={isLoading} items={currentItems}/>
      <Pagination itemsPerPage={itemsPerPage} totalItems={items.length} paginate={paginate}/>
    </div>
  );
}

export default App;
