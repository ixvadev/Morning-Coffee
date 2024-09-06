import React from 'react'

function Navbar() {
  return (
    <div>
        <ul>
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Menu</a>
          <a href="">Reservation</a>
        </ul>
        <div>
            <img src="./public/assets/Navbar/Logo.svg" alt="" />
        </div>
        <ul>
            <a href="">Pages</a>
            <a href="">Shop</a>
            <a href="">Contact</a>
        </ul>
        <div>
            <img src="./public/assets/Navbar/search.svg" alt="" />
            <img src="./public/assets/Navbar/home.svg" alt="" />
        </div>
    </div>
  )
}

export default Navbar