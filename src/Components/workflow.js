import React from 'react'

const Workflow = () => {
return(
	<div id='workflow'>
		<div id='workflow-desc'>This workflow shows how Peter takes a problem and approaches it. It goes through complicated thoughts and considerations as system design, data management, and user experience are important.</div>
		<div id='workflow-btn'>
			<div id='workflow-btn-text'>Start</div>
		</div>
		<div className='workflow-arrows'>
			<div className="fa fa-arrow-down"></div>
		</div>
		<h3 id='phase-title'>Phase 1</h3>
		<ul className='workflow-list'>
			<li className='workflow-list-item3'>
				<img className='workflow-icon'src={require('../images/person-icon.png')}/>
			</li>
			<li className='workflow-list-item3'><img className='workflow-icon'src={require('../images/no-pain-no-gain.jpg')}></img></li>
			<li className='workflow-list-item3'><img className='workflow-icon'src={require('../images/light-bulb.png')}></img></li>
			<li className='workflow-captions'><h3>Peter Kim</h3></li>
			<li className='workflow-captions'><h3>Gotta keep up</h3></li>
			<li className='workflow-captions'><h3>Think of ideas!</h3></li>
		</ul>
		<div className='workflow-arrows'>
			<div className="fa fa-arrow-down"></div>
			<h3>Needs a redo? Go back to Phase 1. Otherwise, continue.</h3>
			<div className="fa fa-arrow-down"></div>
			<h3>Intensity increases</h3>
			<div className="fa fa-arrow-down"></div>
			<div className="fa fa-arrow-down"></div>
		</div>
		<h3 id='phase-title'>Phase 2</h3>
		<ul className='workflow-list'>
			<li className='workflow-list-item3'>
				<img className='workflow-icon'src={require('../images/glasses.png')}/>
			</li>
			<li className='workflow-list-item3'><img className='workflow-icon'src={require('../images/map.png')}></img></li>
			<li className='workflow-list-item3'><img className='workflow-icon'src={require('../images/robot.png')}></img></li>
			<li className='workflow-captions2'><h3>Product Vision</h3></li>
			<li className='workflow-captions2'><h3>Carefully planning it out</h3></li>
			<li className='workflow-captions2'><h3>Build and improve it</h3></li>
		</ul>
		<div className='workflow-arrows'>
			<div className="fa fa-arrow-down"></div>
			<div className="fa fa-arrow-down"></div>
			<div className="fa fa-arrow-down"></div>
		</div>
		<h3 id='phase-title'>Phase 3</h3>
		<div className="fa fa-arrow-down"></div>
		<div id='workflow-btn'><div id='workflow-btn-text'>Build</div></div>
	</div>
	)
}

export default Workflow