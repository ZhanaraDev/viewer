import React, {Component} from 'react';
import {connect} from 'react-redux';

class ChapterContent extends Component{
	render(){
		return (
			<div className="main-content">
                <p>
                    {this.props.chapter.text}
                </p>
	        </div>
		);
	}
}

function mapStateToProps(state){
	return{
		chapter: state.active
	};
}

export default connect (mapStateToProps)(ChapterContent);