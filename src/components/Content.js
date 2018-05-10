import React, { Component } from 'react';
import $ from 'jquery';
import Chapters from './Chapters'
import ChapterContent from '../containers/ChapterContent'

class Content extends Component{
	
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

export default Content;