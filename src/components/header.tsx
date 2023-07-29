import React, {useState} from 'react'
import { HiOutlineMenu } from 'react-icons/hi'
import Navbar from './navbar';

interface IHamburgerMenu {}


const HamburgerMenu : React.FC<IHamburgerMenu> = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const handleMenu = () => {
    setIsOpen(!isOpen);
  }
    return (
    <div>
        <HiOutlineMenu onClick= {handleMenu}/>
        <div className='menu-list'>
            <Navbar />
        </div>
    </div>
  )
}

export default HamburgerMenu