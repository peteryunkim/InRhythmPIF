import React from 'react'

const Navbar = () => {
	return (
		<div className='navbar'>
		<ul className='list'>
		<li className='list-item'><img className ='logo' src='https://www.inrhythm.com/wp-content/uploads/2017/06/logo.png'/></li>
		<li className='list-item'>CLIENTS </li> 
		<li className='list-item'>TESTIMONIALS </li>
		<li className='list-item'>SERVICES </li>
		<li className='list-item'>OUR METHODOLOGY </li>
		<li className='list-item'>ABOUT US </li>
		<li className='list-item'>BLOG </li>
		<li className='list-item'>CAREERS </li>
		<li className='list-item'>RESOURCES </li>
		<li className='list-item'><button>CONTACT US</button></li>
		</ul>
		</div>
	)
}

export default Navbar