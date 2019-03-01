import React from 'react';
import './Navigation.css';
import ocsh from './ocsh.png'; 
class Navigation extends React.Component {

	 render() {
	 	//const onnavClick=this.props.onnavClick;
	return(
			<div className="wrapper">
				<nav className="navMainContainer">
					<img src={ocsh} className="headImage"/>
					<div className="navRightSection">
					<p className="navItem">Home</p>
					<p className="navItem">Gallery</p>
					</div>
				</nav>
			</div>
		)

	}
}



export default Navigation;