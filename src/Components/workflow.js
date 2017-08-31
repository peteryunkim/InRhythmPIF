import React from 'react'

const Workflow = () => {
return(
	<div id='workflow'>
		<div id='workflow-desc'>This workflow shows how Peter takes a problem and approaches it. It may not display everything that goes on in his head as this page would probably be populated with SO much junk and questions but it gives a general overview of the process. There are lots of thoughts and considerations as far as system design, data management, and user experience goes. Not only are his inputs important but also the inputs of others around him.</div>
		<div id='workflow-btn'>
			<div id='workflow-btn-text'>Start</div>
		</div>
		<div className='workflow-arrows'>
			<div className="fa fa-arrow-down"></div>
		</div>
		<h1 id='phase-title'>Phase 1</h1>
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
		<h1 id='phase-title'>Phase 2</h1>
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
			<h3>Think carefully, do you need to do more? If so, go back to phase 2.</h3>
			<div className="fa fa-arrow-down"></div>
			<div className="fa fa-arrow-down"></div>
			<h3>It's the final countdown!</h3>
			<div className="fa fa-arrow-down"></div>
			<div className="fa fa-arrow-down"></div>
			<div className="fa fa-arrow-down"></div>
		</div>
		<h1 id='phase-title'>Phase 3</h1>
		<ul className='workflow-list'>
			<li className='workflow-list-item5'>
				<img className='workflow-icon'src={require('../images/checklist.png')}/>
			</li>
			<li className='workflow-list-item5'><img className='workflow-icon'src={require('../images/community.png')}></img></li>
			<li className='workflow-list-item5'><img className='workflow-icon'src={require('../images/discussion.png')}></img></li>
			<li className='workflow-list-item5'><img className='workflow-icon'src={require('../images/study.png')}></img></li>
			<li className='workflow-list-item5'><img className='workflow-icon'src={require('../images/finish.png')}></img></li>
			<li className='workflow-captions3'><h3>Get things done</h3></li>
			<li className='workflow-captions3'><h3>Community discussion</h3></li>
			<li className='workflow-captions3'><h3>Exchange feedback</h3></li>
			<li className='workflow-captions3'><h3>Work on feedback</h3></li>
			<li className='workflow-captions3'><h3>Finish</h3></li>
		</ul>
		<div className="fa fa-arrow-down"></div>
		<div id='workflow-btn'><div id='workflow-btn-text'>Build</div></div>
	</div>
	)
}

export default Workflow