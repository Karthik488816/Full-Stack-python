import React from 'react'
import { Link } from 'react-router-dom'
const NavBar = () => {
  return (
    <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <a href="/user">User</a>
    </div>
  )
}

export default NavBar
