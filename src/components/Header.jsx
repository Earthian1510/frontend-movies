import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className='container'>
        <nav className='navbar'>
        <Link className='navbar-brand'>Logo</Link>
            <ul className='nav'>
                <li className='nav-item'>
                    <NavLink to='/' className='nav-link'>Home</NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink to='/movies' className='nav-link'>Movie List</NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink to='/movies/addMovie' className='nav-link'>Add Movie</NavLink>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Header