import React,{useState} from 'react'

const Search = ({getQuery}) => {
  const [text,setText] = useState('')
  const onChange =(q) => {
    setText(q)
    getQuery(q)
  }
  return (
    <div className='searchbar'>
        <input 
        type="text" 
        placeholder='Search Characters...' 
        className='inputbox'
        value={text}
        onChange={(e)=>onChange(e.target.value)}
        />
    </div>
  );
}

export default Search