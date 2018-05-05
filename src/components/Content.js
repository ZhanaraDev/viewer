import React, { Component } from 'react';
import $ from 'jquery';
import ChapterList from './Chapter'
import ChapterContent from '../containers/ChapterContent'

class Content extends Component{
	constructor(){
		super();
		this.state = {
			showChapterList: false
		}
	}
	onClick(e){
		console.log("lalal");
		//e.preventDefault();
		this.setState({showChapterList: !this.state.showChapterList});
		 $(".book-titles-wrapper").toggleClass("opened");
		 console.log("something",$(this));
        $(".aside-menu-button").toggleClass("opened");
	}
	render(){

		return(
			<div className="Content">
				<div className="book-titles-wrapper">
					<ChapterList/>
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