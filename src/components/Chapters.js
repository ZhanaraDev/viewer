import React, { Component } from 'react';
import $ from 'jquery';
import ChapterList from '../containers/ChapterList';

class Chapters extends Component{
	
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

