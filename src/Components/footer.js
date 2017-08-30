import React from 'react'

const Footer = () => {
	return(
		<div id='footer'>
			<div className='footer-column'><img className='footer-logo' alt='logo' src='https://www.inrhythm.com/wp-content/uploads/2017/06/logo.png'/>
				<h4 id='footer-col1'>InRhythm is a high-growth, New York based, technology consulting firm focused on high velocity software development through lean UX, software engineering and agile delivery services.</h4>
			</div>
			<div className='footer-column footer-col2'>
				<h4 className='footer-column-title'>Our Office</h4>
				<h4>140 Broadway, Suite 2270 New York, NY 10005</h4>
			</div>
			<div className='footer-column footer-col3'>
			<h4 className='footer-column-title'>Need help?</h4>
				<h4><a href='https://www.inrhythm.com/blog/' className='links'>Our Blog</a></h4>
				<h4><a href='https://www.inrhythm.com/contact-us/' className='links'>Contact Us</a></h4>
				<h4><a href='https://www.inrhythm.com/jobs-career/' className='links'>Careers</a></h4>
			</div>
			<div className='footer-column'>
				<h4 className='footer-column-title'>Get in touch with Peter</h4>
				<ul className='footer-ul'>
					<li className='footer-icons'><a href='https://www.github.com/peteryunkim' className="links fa fa-github"> </a></li>
					<li className='footer-icons'><a href='https://www.linkedin.com/in/peteryunkim' className="links fa fa-linkedin"> </a></li>
					<li className='footer-icons'><a href='https://www.github.peteryunkim.io' className="links fa fa-odnoklassniki"> </a></li>
					<li className='footer-icons'><a className="links fa fa-medium"> </a></li>
				</ul>
			</div>
		</div>
	)
}

export default Footer