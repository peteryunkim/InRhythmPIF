import React from 'react'

const Navbar = () => {
	return (
		<div className='navbar'>
		<ul className='list'>
		<li className='list-item'><a href='https://www.inrhythm.com'><img className='logo' alt='logo' src='https://www.inrhythm.com/wp-content/uploads/2017/06/logo.png'/></a></li>
		<li className='list-item'><a href='https://www.inrhythm.com/clients/'>CLIENTS</a> </li> 
		<li className='list-item'><a href='https://www.inrhythm.com/testimonials/'>TESTIMONIALS</a> </li>
		<li className='list-item'><a href='https://www.inrhythm.com/services/'>SERVICES</a> </li>
		<li className='list-item'><span id='active-item'>OUR METHODOLOGY</span> </li>
		<li className='list-item'><a href='https://www.inrhythm.com/about/'>ABOUT US</a> </li>
		<li className='list-item'><a href='https://www.inrhythm.com/blog/'>BLOG</a> </li>
		<li className='list-item'><a href='https://www.inrhythm.com/jobs-career/'>CAREERS</a> </li>
		<li className='list-item'><a href='https://www.inrhythm.com/resources/'>RESOURCES</a> </li>
		<li className='list-item'><button id='contact'>CONTACT US</button></li>
		</ul>
		</div>
	)
}

export default Navbar