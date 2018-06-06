import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {select} from '../actions/index'
import {Link,withRouter} from 'react-router-dom'


class ChapterList extends Component{
	constructor(){
		super();
		this.state = {
            par_current_classes: 'paragraph-current',
        };

	}
	
	showChapter(chapter,i){
		var pathArray = window.location.href.split("/");
		var courseId = pathArray[pathArray.indexOf("course")+1];
		this.state.par_current_classes = this.props.chapter_active.node_id===chapter.node_id ?"paragraph-current active" : "paragraph-current";
		return(
			<div className={this.state.par_current_classes} href="#"  key={chapter.node_id} >
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
	showSubChapter(chapter){
		let pathArray = window.location.href.split("/");
		let courseId = pathArray[pathArray.indexOf("course")+1];
		this.state.par_current_classes = this.props.chapter_active.node_id===chapter.node_id ?"paragraph-current active" : "paragraph-current";
		console.log("AHAHHAHAHAAH",this.props.chapter_active.node_id===chapter.node_id,chapter.node_id,this.state.par_current_classes);
		
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
		let i = 1;
		return chapters.map(
			(chapter) => {
				if(chapter.node_parent_id == null)
					return this.showChapter(chapter,i++);
				else
					return this.showSubChapter(chapter);
					
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
		chapter_active: state.active
	};
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({select:select},dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(ChapterList);