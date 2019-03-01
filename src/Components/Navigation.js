import React from 'react';
import ocsh from './ocsh.png'; 
class Navigation extends React.Component {
	constructor(){
		super();
		this.state={
			route:''
			// visible:'hidden',
		}
	}
	onnavClick=(selection)=>{
		console.log(selection);
		this.setState({route:selection})	
	}

	render() 
	{
	 	//const onnavClick=this.props.onnavClick;
		return(
			<div className="wrapper">
				<nav className="navMainContainer">
					<img src={ocsh} className="headImage" alt="Oracle Logo" />
					<div className="navRightSection">
					<ul className="header">
						<li><p className="navItem"><a href="/">Solution Demos</a></p></li>
						<li><p className="navItem"><a href="/SolutionWorkshops">Solution Workshops</a></p></li>
						<li><p className="navItem"><a href="/RequestHelp">Request Help</a></p></li>
					</ul>							
					</div>
				</nav>
			</div>
		)
	}
}

export default Navigation;