import React, { Component } from 'react';
import './App.css';

import Header from './components/Header';
import Content from './components/Content';
import Chapters from './components/Chapters';
import Footer from './components/Footer';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'




class App extends Component {
	render() {
		return (
		<Router>
		  <div id="app-main">
			<Header />
			// <Content />
			<Route path="/course/:course_id?" component = {Content}/>

			<Footer />
		  </div>
		</Router>

		);
	}
}

export default App;
