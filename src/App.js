import React, { Component } from 'react';
import './App.css';

import Header from './components/Header';

class App extends Component {
	constructor(props){
		super(props);
		document.title = "E-sell";
	}
	render() {
		return (
		  <div className="App">
		    <Header />
		  </div>
		);
	}
}

export default App;
