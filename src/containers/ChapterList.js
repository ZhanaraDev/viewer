import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {select} from '../actions/index'

class ChapterList extends Component{
	showList(){
		console.log("chapter",this.props.chapters.length);
		return this.props.chapters.map(
				(chapter) => {
					console.log(chapter.nodes,"---",chapter.nodes.length,chapter.nodes.length!==0,'---',chapter.text);
					let node_text = '';
					if(chapter.nodes.length!==0){
						console.log(chapter.nodes,"---",chapter.nodes.length);
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
							                    <p>{node_text}</p>   
							                </div>
							            </ul>
						            </div>
								);

						// 	}
						// )
					// }
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