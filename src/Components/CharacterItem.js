import React from 'react'

const CharacterItem = ({item}) => {
  return (
    <div className='card'>
        <div className='card-in'>
            <div className='card-front'>
                <img src={item.img} alt=""/>
            </div>
            <div className='card-back'>
                <h1>{item.name}</h1>
                <ul>
                    <li>
                        <span>Actor Name :</span> {item.portrayed}
                    </li>
                    <li>
                        <span>NickName :</span> {item.nickname}
                    </li>
                    <li>
                        <span>Birthday :</span> {item.birthday}
                    </li>
                    <li>
                        <span>Occupation :</span> {item.occupation}
                    </li>
                    <li>
                        <span>Status :</span> {item.status}
                    </li>
                </ul>
            </div>
        </div>
    </div>
  );
}

export default CharacterItem