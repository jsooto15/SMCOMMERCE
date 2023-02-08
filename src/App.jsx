import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import NavBar from './componets/NavBar'
import ItemListContainer from './componets/ItemListContainer'

const App = () => {
  return (
    <>
  
     <div className='nav'>
     <NavBar/>
     </div>
     <div className='itemcontainer'>
     <ItemListContainer gretting="Bienvenidos a SM-COMMERCE"></ItemListContainer>
     </div>
     
    </>
  )
}


export default App
