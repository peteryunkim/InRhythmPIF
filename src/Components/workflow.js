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
		<div>Phase 1</div>
		<div className='workflow-arrows'>
			<div className="fa fa-arrow-down"></div>
			<div className="fa fa-arrow-down"></div>
			<div className="fa fa-arrow-down"></div>
		</div>
		<div>Phase 2</div>
		<div className='workflow-arrows'>
			<div className="fa fa-arrow-down"></div>
			<div className="fa fa-arrow-down"></div>
			<div className="fa fa-arrow-down"></div>
		</div>
		<div>Phase 3</div>
		<div id='workflow-btn'><div id='workflow-btn-text'>Build</div></div>
	</div>
	)
}

export default Workflow