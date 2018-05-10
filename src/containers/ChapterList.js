import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {select} from '../actions/index'

class ChapterList extends Component{
	showList(){
		return this.props.chapters.map(
				(chapter) => {
					const classes = this.props.chapter_active.id===chapter.id ?"paragraph-current active" : "paragraph-current";
					return(
						<div className={classes} href="#" onClick={() => this.props.select(chapter)} key={chapter.id} >
							<ul className="paragraph-title-wrapper">
			                    <li>
			                        <div className="paragraph-title">
			                            <div className="paragraph-text">{chapter.title}</div>
			                        </div>
			                    </li>
			                    <div className="paragraph-text">
				                    <p>
				                    	{chapter.text}
				                    </p>   
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
				{this.showList()}
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