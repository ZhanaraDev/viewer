import React, { Component } from 'react';
import $ from 'jquery';
import ChapterList from '../containers/ChapterList';

class Chapters extends Component{
	constructor(props){
		super(props);
		this.state = 
			{isActive: false};
			

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(){
		console.log("some shit");
		this.setState(prevState => ({
				isActive: !this.state.isActive
			}) 
		);

		$('#1').toggleClass('opened');
		console.log("lala",$('#1'));
	}
	render(){
		return(
			<div className="aside-menu-content ">

	            <div className="book-title">
	                Название книги
	                Название книги
	                Название книги
	            </div>

	            <ChapterList />
	            
	        </div>
		);
	}
}

export default Chapters;