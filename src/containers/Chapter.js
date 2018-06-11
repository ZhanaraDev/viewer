import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {select} from '../actions/index';
import $ from 'jquery';

class Chapter extends Component{
	constructor(){
		super();
		this.state = {
            par_current_classes: 'paragraph-current',
        };

	}
}

export default Chapter;