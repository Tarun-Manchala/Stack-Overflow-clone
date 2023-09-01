import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../../assets/logo.png'
import search from '../../assets/search-solid.svg'
import './Navbar.css'
import Avatar from '../Avatar/Avatar'

export const Navbar = () => {
  var user=null
  return (
    <nav className='main-nav'>
        <div className="navbar">
            <Link to='/' className="nav-item nav-logo ">
              <img src={logo} alt="logo" />
            </Link>
            <Link to='/about' className="nav-item nav-btn">About</Link>
            <Link to='/products' className="nav-item nav-btn">Products</Link>
            <Link to='/Teams' className="nav-item nav-btn">For teams</Link>
            <form action="#">
              <input type="text" placeholder='search...' />
              <img src={search} alt="search log" className='search-icon' width={15}/>
              </form>
              { user===null ?
              <Link to='/Auth' className="nav-item nav-link">Log in</Link> :
              <>
              <Link to='/' className='' style={{textDecoration:"none"}}><Avatar backgroundColor='blue' borderRadius='50%' color="white" px='10px' py='7px' >M</Avatar></Link>
              <button className="nav-item nav-link">Log out</button>
              </>
            }
        </div>
    </nav>
  )
}
