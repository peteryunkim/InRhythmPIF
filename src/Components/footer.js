import React from 'react'

const Footer = () => {
	return(
		<div id='footer'>
			<div className='footer-column'><img className='footer-logo' alt='logo' src='https://www.inrhythm.com/wp-content/uploads/2017/06/logo.png'/>
				<h4 id='footer-col1'>InRhythm is a high-growth, New York based, technology consulting firm focused on high velocity software development through lean UX, software engineering and agile delivery services.</h4>
			</div>
			<div className='footer-column'>
				<h4 className='footer-column-title'>Our Offices</h4>
				<h4>140 Broadway, Suite 2270 New York, NY 10005</h4>
			</div>
			<div className='footer-column'>
			<h4 className='footer-column-title'>Need help?</h4>
				<h4><a href='https://www.inrhythm.com/blog/' className='links'>Our Blog</a></h4>
				<h4><a href='https://www.inrhythm.com/contact-us/' className='links'>Contact Us</a></h4>
				<h4><a href='https://www.inrhythm.com/jobs-career/' className='links'>Careers</a></h4>
			</div>
			<div className='footer-column'>
				<h4 className='footer-column-title'>Get in touch</h4>
				<ul>
					<li>Github</li>
					<li>LinkedIn</li>
					<li>Portfolio</li>
					<li>Medium</li>
				</ul>
			</div>
		</div>
	)
}

export default Footer