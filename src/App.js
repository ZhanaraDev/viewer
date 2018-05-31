import React, { Component } from 'react';
import './App.css';

import Header from './components/Header';
import Content from './components/Content';
import Chapters from './components/Chapters';
import Footer from './components/Footer';
import ChapterList from './containers/ChapterList';
import ChapterContent from './containers/ChapterContent';
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
			<Route exact path="/viewer/course/:course_pk" component = {Content}/>
			<Route exact path="/viewer/course/:course_pk/nodes/:node_id" component={Content}/>
			<Route exact path="/viewer/course/:course_pk/nodes/:node_id/item/:item_id" component={Content}/>
			<Footer />
		  </div>
		</Router>

		);
	}
}

export default App;
