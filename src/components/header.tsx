import React, {useState} from 'react'
import { HiOutlineMenu } from 'react-icons/hi'
import Navbar from './navbar';


// interface IHamburgerMenu {

// }


const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const handleMenu = () => {
    setIsOpen(!isOpen);
    
  }
    return (
    <div className='font-medium font-mono text-4xl fixed cursor-pointer'>
        <HiOutlineMenu onClick= {handleMenu}/>
        <div className='menu-list'>
          {/* logic needed */}
            { isOpen ? <Navbar /> : <></>}
        
        </div>
    </div>
  )
}

export default HamburgerMenu
