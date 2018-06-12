import React, { Component } from 'react';
import ChapterList from '../containers/ChapterList';
import {connect} from 'react-redux';

class Chapters extends Component{
	
	render(){
		let courseName = "Название книги"
		if(this.props.chapters.length !== 0)
			courseName = this.props.chapters[0]["text"];

		return(
			<div className="aside-menu-content ">

	            <div className="book-title">
	            	{courseName}
	            </div>

	            <ChapterList />
	            
	        </div>
		);
	}
}

function mapStateToProps(state){
	return {
		chapters: state.chapters
	};
}
export default connect (mapStateToProps)(Chapters);

