import React, { useState } from 'react'
import MenuLists from './menu-list';

const MenuItems = ({items}) => {
  const [displayCurrentChildren,setDisplayCurrentChildren] = useState({})

  const handleCildrenToggle = (label)=>{
  setDisplayCurrentChildren({...displayCurrentChildren,
  [label]: !displayCurrentChildren[label]
  })

}

console.log(displayCurrentChildren);

  return (
  <ul>
  {items.map((item) => {
  return(
    <div className='menu-container'>
      <div className='label-and-button'>
    <li>{item.label}</li>
    {item.children && <span onClick={()=> handleCildrenToggle(item.label) }>
      {displayCurrentChildren[item.label] ? "-" : "+"}
      </span>}
      </div>
        
    {item.children?.length > 0 && displayCurrentChildren[item.label] && <MenuLists items={item.children}/>}
    </div>
  )

  })}
  </ul>
  )
  }

export default MenuItems
