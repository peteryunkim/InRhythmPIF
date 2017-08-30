import React from 'react'

const Workflow = () => {
return(
	<div id='workflow'>
		<div>This workflow shows how Peter takes a problem and approaches it. It goes through complicated thoughts and considerations as system design, data management, and user experience are important.</div>
		<div id='workflow-btn'>
			<div id='workflow-btn-text'>Start</div>
		</div>
		<div className='workflow-arrows'>
			<div className="fa fa-arrow-down"></div>
			<div className="fa fa-arrow-down"></div>
			<div className="fa fa-arrow-down"></div>
		</div>
		<h3>Phase 1</h3>
		<ul className='workflow-list'>
			<li className='workflow-list-item3'>
				<img className='workflow-icon'src={require('../images/person-icon.png')}/><span className='caption'>caption</span>
			</li>
			<li className='workflow-list-item3'><img className='workflow-icon'src={require('../images/no-pain-no-gain.jpg')}></img></li>
			<li className='workflow-list-item3'><img className='workflow-icon'src={require('../images/light-bulb.png')}></img></li>
		</ul>
		<div className='workflow-arrows'>
			<div className="fa fa-arrow-down"></div>
			<div className="fa fa-arrow-down"></div>
			<div className="fa fa-arrow-down"></div>
		</div>
		<h3>Phase 2</h3>
		<ul className='workflow-list'>
			<li className='workflow-list-item3'>1</li>
			<li className='workflow-list-item3'>2</li>
			<li className='workflow-list-item3'>3</li>
		</ul>
		<div className='workflow-arrows'>
			<div className="fa fa-arrow-down"></div>
			<div className="fa fa-arrow-down"></div>
			<div className="fa fa-arrow-down"></div>
		</div>
		<h3>Phase 3</h3>
		<div id='workflow-btn'><div id='workflow-btn-text'>Build</div></div>
	</div>
	)
}

export default Workflow