import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import NavBar from './componets/NavBar'
import ItemListContainer from './componets/ItemListContainer'

const App = () => {
  return (
    <>
    
     <NavBar/>
     <ItemListContainer gretting="Bienvenidos a SM COMMERCE"></ItemListContainer>
    </>
  )
}


export default App
