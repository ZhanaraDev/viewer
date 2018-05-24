import React, { Component } from 'react';
import $ from 'jquery';
import Chapters from './Chapters'
import ChapterContent from '../containers/ChapterContent';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {getChapterList} from '../actions/index';
import {select,select_item} from '../actions/index';

class Content extends Component{

	componentWillMount(){
		console.log("WHEEEEEEN?");
		if(this.props.location !== undefined){
			var course_pk = this.props.match.params.course_pk;
		
			if(course_pk !== undefined){
				this.props.getChapterList(course_pk);
			}
		}
	}
	
	componentDidMount(){
		console.log("AAAAAA",this.props.match.params);
	}
	iterate(chapters,node_id,item_id){
		for(var i=0;i<chapters.length;i++){
			if(chapters[i].node_id === parseInt(node_id)){
				this.props.select(chapters[i]);
				for(var j=0;j<chapters[i].items.length;j++){
					if(chapters[i].items[j].item_id === parseInt(item_id))
						this.props.select_item(chapters[i].items[j].item_exec_file);
				}
			}
			else
				this.iterate(chapters[i].nodes,node_id,item_id);
		}
		
	}
	
	onClick(e){
		$(".book-titles-wrapper").toggleClass("opened");
        $(".aside-menu-button").toggleClass("opened");
	}

	render(){
		var node_id = this.props.match.params.node_id;
		var item_id = this.props.match.params.item_id;
		if(node_id){
			this.iterate(this.props.chapters,node_id,item_id);
			console.log("selected");
		}
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
			        	<div className = "col-sm-6">
			            	<ChapterContent path = {this.props.match.params} />
			            </div>
			        </div>
			    </div>
			</div>
		);
	}
}

function mapStateToProps(state){
	return {
		chapters: state.chapters
	};
}

function mapDispatchToProps(dispatch){
	return bindActionCreators(
		{
			getChapterList:getChapterList,
			select:select,
			select_item:select_item
		},dispatch
		)
}

export default connect(mapStateToProps,mapDispatchToProps)(Content);
// export default Content;