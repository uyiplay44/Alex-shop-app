import './Navbar.css'
import { Link } from 'react-router-dom'
import Logo from '../../assets/logo.jpg';
import { RiCloseFill, RiMenu3Fill } from 'react-icons/ri';
import { useState } from 'react';


export const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => {
    setNav(!nav)
  }
  return (
    <div className='Navbar_main'>
      <div className='Nav_logo'>
        <Link><img src={Logo} alt="nav" /></Link>
      </div>
      <ul className={nav ? "Nav-list active" : "Nav-list"}>
        <li><Link to="/" className='link'>Home</Link></li>
        <li><Link to="/" className='link'>About</Link></li>
        <li><Link to="/" className='link'>Contact</Link></li>
      </ul>

      <div className='Menu' onClick={handleClick}>
        {!nav ? <RiMenu3Fill /> : <RiCloseFill />}
      </div>
    </div>
  )
}
