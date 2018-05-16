import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {select} from '../actions/index'
import {Link} from 'react-router-dom'

class ChapterList extends Component{
	showChapter(chapter,i){
		console.log(chapter.text,"---",chapter.node_parent_id);
		const par_current_classes = this.props.chapter_active.node_id===chapter.node_id ?"paragraph-current active" : "paragraph-current";
		
		return(
			<div className={par_current_classes} href="#" onClick={() => this.props.select(chapter)} key={chapter.node_id} >
				<ul className="paragraph-title-wrapper">
                    <li>
                        <div className="paragraph-title">
                            <div className="paragraph-text">Тема {i}</div>
                        </div>
                    </li>
                    <div className="paragraph-text">
	                    	{chapter.text}

	                    	{this.iterate(chapter.nodes)}
	                </div>
	            </ul>
            </div>
		);
	}
	showSubChapter(chapter){
		return(
			<div className="paragraph-text-child" onClick={() => this.props.select(chapter)} key={chapter.node_id} >
				<Link to="/nodes/">{chapter.text}</Link>
				{this.iterate(chapter.nodes)}
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

	// TO DELETE
	showList(){
		// console.log("chapter",this.props.chapters.length);
		return this.props.chapters.map(
				(chapter) => {
					// console.log(chapter.nodes,"---",chapter.nodes.length,chapter.nodes.length!==0,'---',chapter.text);
					let node_text = '';
					if(chapter.nodes.length!==0){
						// console.log(chapter.nodes,"---",chapter.nodes.length);
						chapter.nodes.map(
							(node) => {
								node_text = node.text;
							}
						)
					}
							
					const par_current_classes = this.props.chapter_active.node_id===chapter.node_id ?"paragraph-current active" : "paragraph-current";
					return(
						<div className={par_current_classes} href="#" onClick={() => this.props.select(chapter)} key={chapter.node_id} >
							<ul className="paragraph-title-wrapper">
			                    <li>
			                        <div className="paragraph-title">
			                            <div className="paragraph-text">Tema
			                            </div>
			                            
			                        </div>
			                    </li>
			                    <div className="paragraph-text">
				                    <h5>
				                    	{chapter.text}
				                    </h5> 
				                </div>
				            </ul>
			            </div>
					);


				} 
			);
	}

	render(){
		return(
			<div className="book-paragpraphs-wrapper">
				{this.iterate(this.props.chapters)}
				{/* {this.showList()} */}
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