import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {select,highlightActiveBlock} from '../actions/index';
import {Link} from 'react-router-dom';

class ChapterList extends Component{

	highlightCurrentChapter(id){
		this.props.highlightActiveBlock(id);
		// $(".paragraph-current.active").removeClass("active");

		// if (!$("#"+id).hasClass('active')){
		// 	$("#"+id).toggleClass('active');
		// }

	}

	showChapter(chapter){
        let pathArray = window.location.href.split("/");
        let courseId = pathArray[pathArray.indexOf("course")+1];
        if(this.props.chapter_active.node_id===chapter.node_id){
        	
        	this.highlightCurrentChapter(chapter.node_id)
        }

		let par_current_classes = chapter.node_id===this.props.active_block ?"paragraph-current active" : "paragraph-current";

		return(

			<div id={chapter.node_id}  href="#" className={par_current_classes} key={chapter.node_id} >
			
				<ul className="paragraph-title-wrapper">
                    <li>
                        <div className="paragraph-title">
                            <div className="paragraph-text">{chapter.text}</div>
                        	
                        </div>
                    </li>
                    <div className="paragraph-text" >
	                    	<Link to={"/viewer/course/"+courseId+"/nodes/"+chapter.node_id} >{chapter.text}</Link>

	                    	{this.iterate(chapter.nodes)}
	                </div>
	            </ul>
            </div>
		);
	}

	showSubChapter(chapter,mainParentId){
		let pathArray = window.location.href.split("/");
		let courseId = pathArray[pathArray.indexOf("course")+1];
		
		if(this.props.chapter_active.node_id===chapter.node_id){
			this.highlightCurrentChapter(mainParentId);
		}

		return(
			<div className="paragraph-text-child"  key={chapter.node_id} >
				
				<Link to={"/viewer/course/"+courseId+"/nodes/"+chapter.node_id}  key={chapter.node_id}>{chapter.text}</Link>
				{
					this.iterate(chapter.nodes)
				}
			</div>
		);
	}
		
	iterate(chapters){
		return chapters.map(
			(chapter) => {
				if(chapter.node_parent_id == null){
					this.mainParentId = chapter.node_id;
					return this.showChapter(chapter);
				}
				else
					return this.showSubChapter(chapter,this.mainParentId);
					
			}
		);
	}

	render(){
		let course_structure = this.props.chapters;
		if(this.props.chapters.length !== 0 && this.props.chapters !== undefined){
			course_structure = this.props.chapters[0]["nodes"];
		}
		return(
			<div className="book-paragpraphs-wrapper">
			
				{this.iterate(course_structure)}
			</div>
		);
	}
}

function mapStateToProps(state){
	return {
		chapters: state.chapters,
		chapter_active: state.active,
		active_block: state.active_block
	};
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({
		select:select,
		highlightActiveBlock:highlightActiveBlock
	},dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(ChapterList);