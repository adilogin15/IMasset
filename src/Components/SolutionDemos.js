import React, { Component } from 'react';
import Navigation from './Navigation';
import Home from './Home';
import Card from './Card';

class SolutionDemos extends Component {

	// constructor(){
	// 	super();
	// 	this.state={
	// 		route:'home'
	// 		// visible:'hidden',
	// 	}
	// }
	// onnavClick=(selection)=>{
	// 	this.setState({route:selection})	
	// }



  render() {
  	
    return (
      <div>
        <Navigation />
        <Home/>
        <Card/>
      </div>
    );
  }
}
export default SolutionDemos;