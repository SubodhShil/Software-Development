import React from 'react'
import './App.css'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav className='flex justify-center gap-10 border-2 items-center'>

            <div>
                <img src="https://brandeps.com/logo-download/S/SMUCT-logo-01.png" alt="" height={"100px"} width={"100px"} />
            </div>

            <div>
                <ul className='flex gap-3'>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/portfolio">Portfolio</Link>
                    <Link to="/contact">Contact</Link>
                </ul>
            </div>

        </nav>
    )
}

export default Navbar