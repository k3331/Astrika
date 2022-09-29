import React,{useEffect,useState} from 'react'
import './SearchBar.css'
import { BsSearch } from "react-icons/bs"
import Button from 'react-bootstrap/Button';




function SearchBar(props) {

  const[input,setInput] = useState('')

  function setData(){
    props.Search(input)
  }
  return (
    <div style ={{display:'flex', width:"70vw",justifyContent:'space-between',alignItems:'center'}}>
      <div className='Search'>
      <input onChange ={(e)=>{
        setInput(e.target.value)
      }} className ='SearchInput'/>
    </div>
    <Button onClick ={ setData} className='searchButton'><BsSearch className ='searchIcon'/></Button>
    </div>
  )
}

export default SearchBar