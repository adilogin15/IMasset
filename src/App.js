import React, { Component } from 'react';
import './App.css';
import Navigation from './Components/Navigation/Navigation';
import Home from './Components/Home/Home';
import Card from './Components/Cards/Card';


class App extends Component {

	constructor(){
		super();
		this.state={
			route:'home',
			visible:'hidden',
		}
	}
	onnavClick=(selection)=>{
		this.setState({route:selection})	
	}



  render() {
  	
    return (
      <div className="App">
        <Navigation />
				<Home/>
				<Card/>
      </div>
    );
  }
}
export default App;