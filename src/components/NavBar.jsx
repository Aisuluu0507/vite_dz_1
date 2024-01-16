import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav>
        <ul>
            <li>
                <NavLink className ='link_one'to='/'>Posts</NavLink>
            </li>
            <li>
                <NavLink className='link_two' to='/create_post' >Create Post</NavLink>
            </li>
        </ul>
    </nav>
  )
}

export default NavBar