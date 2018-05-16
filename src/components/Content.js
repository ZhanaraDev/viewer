import React, { Component } from 'react';
import $ from 'jquery';
import Chapters from './Chapters'
import ChapterContent from '../containers/ChapterContent'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {getChapterList} from '../actions/index'
import { withRouter } from 'react-router-dom'


class Content extends Component{

	componentDidMount(){
		if(this.props.location !== undefined){
			var course_id = this.props.match.params.course_id;
			if(course_id !== undefined)
				this.props.getChapterList(course_id);
		}
	}
	
	onClick(e){
		$(".book-titles-wrapper").toggleClass("opened");
        $(".aside-menu-button").toggleClass("opened");
	}

	render(){
		return(
			<div className="Content">

				<div className="book-titles-wrapper">
					<Chapters/>
				</div>
				<div className="aside-menu-button-wrapper" onClick={this.onClick.bind(this)} >
					
			        <div className="aside-menu-button" >
			            <div id="hexagon">
			                <p>
			                    содержание
			                </p>
			            </div>
			        </div>
			    </div>
				<div className="main-content-wrapper">
			        <div className="container">
			            <ChapterContent/>
			        </div>
			    </div>
			</div>
		);
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({getChapterList:getChapterList},dispatch)
}

export default connect(null,mapDispatchToProps)(Content);