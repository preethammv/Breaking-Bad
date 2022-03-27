import React from 'react'
import CharacterItem from './CharacterItem';
import Spinner from './Spinner';

const Character = ({items,isLoading}) => {
  return isLoading ? (
      // <h1>Loading...</h1>
      <Spinner/>
  ) : (
    <section className='grid'>
        {items.map(item =>(
            <CharacterItem key ={item.char_id}item={item}></CharacterItem>
        ))}
    </section>
  );
}

export default Character