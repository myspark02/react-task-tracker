import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
        <footer>
            <p> CopyRight &cop; 2022</p>
             <Link to="/about">About</Link>
        </footer>
    </div>
  )
}

export default Footer