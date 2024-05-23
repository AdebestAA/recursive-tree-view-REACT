import React from 'react'
import MenuItems from './menu-items';
import menus from "./data"


const App = () => {

  return (
    <div className='main-container'>
  <MenuItems items={menus}/>
    </div>
  )
}

export default App
