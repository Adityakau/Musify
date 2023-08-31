import React from 'react'
import CardItem from './CardItem'
import './Cards.css'; 
function Cards() {
  return (
    <div className='cards'>
        <h1> Check out the artists!</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem
                        src='./images/arijit1.jpg' 
                        text="Arijit Singh"
                        label="Love"
                        path='/arijit'
                    />
                    <CardItem
                        src='./images/Sid Sriram.jpg'
                        text="Sid Sri Ram"
                        label="Fantasy"
                        path='/Sidsriram'
                    />
                </ul>
                <ul className='cards__items'>
                    <CardItem
                        src='./images/anirudh.jpeg'
                        text="Anirudh Ravichandar"
                        label="Bass"
                        path='/anirudh'
                    />
                    <CardItem
                        src='./images/rithviz.jpg'
                        text="Rithviz"
                        label="Adventure"
                        path='/Rithviz'
                    />
                     <CardItem
                        src='./images/ar rahman.png'    
                        text="A R Rahman"
                        label="Pride"
                        path='/ARrahman'
                    />
                </ul>
            </div>
        </div>
      
    </div>
  )
}

export default Cards
