import React from 'react'
import { NavLink } from 'react-router-dom'
import { Authentication } from './Auth/Authentication'

export const NavBar = ({ User }) => (
  <div className='custom-bg-color'>
    <nav className='navbar navbar-dark navbar-expand-lg mr-5 ml-5'>
      <div className='navbar-brand'>Note App</div>

      <ul className='navbar-nav mr-auto'>
        <li className='nav-item'>
          <NavLink className='nav-link' to='/' exact>
            Home
          </NavLink>
        </li>
        <li className='nav-item'>
          <NavLink className='nav-link' to='/about'>
            About
          </NavLink>
        </li>
        <li className='nav-item'>
          <NavLink className='nav-link' to='/notes'>
            Notes
          </NavLink>
        </li>
      </ul>
      <div className=''>{<Authentication />}</div>
    </nav>
  </div>
)
