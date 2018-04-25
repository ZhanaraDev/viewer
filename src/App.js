import React, { Component } from 'react';
import './App.css';

import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

class App extends Component {
	render() {
		return (
		  <body>
			<Header />
			<Content />
			<Footer />
		  </body>
		);
	}
}

export default App;
