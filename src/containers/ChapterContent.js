import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {selectItem,postTestResults} from '../actions/index';
import Content from '../components/Content';
import VideoPlayer from './VideoPlayer';

import {
  Link
} from 'react-router-dom';
import $ from 'jquery';
import videojs from 'video.js';

class ChapterContent extends Component{

    constructor(props){
        super(props)
        this.course_pk = this.props.path["course_pk"];
        this.node_id = this.props.path["node_id"];

    }


    handleSubmit = e => {
        e.preventDefault();
        let questions = $("input[type='text'][name='question']");
        let data = {};

        for(let i=0;i<questions.length;i++){
            let selected_answer = $("input[type='radio'][name='"+questions[i].defaultValue+"']:checked");
            let result_value;
            let mc_ans = [];
            if(selected_answer.length===0){
                selected_answer = $("input[type='checkbox'][name='"+questions[i].defaultValue+"']:checked");
                for(let i=0;i<selected_answer.length;i++){
                    mc_ans.push(selected_answer[i].value);
                }
                result_value = mc_ans;
            }
            else{
                result_value = selected_answer[0].value
            }
            data[questions[i].defaultValue ] = result_value;
        }
        
        this.props.postTestResults(data);

    }


	render(){
        // FOR ITEM ICONS RENDERING
		let items = [];
		if(this.props.chapter !== null && this.props.chapter.items !== undefined){
			items = this.props.chapter.items
		}
		
    	let items_mapped = items.map((item) => {
            let btn_class = '';
            switch(item.content_type){
                case 1:
                    btn_class = 'btn-page';
                    break;
                case 2:
                    btn_class = 'btn-video';   
                    break;                 
                case 3:
                    btn_class = 'btn-animation';  
                    break;                 
                case 4:
                    btn_class = 'btn-test';    
                    break;                
                case 5:
                    btn_class = 'btn-problem'; 
                    break;                                   
            }
    		return(
                <div className="item-button" key={item.item_id}>
                    <Link to={"/viewer/course/"+this.course_pk+"/nodes/"+this.node_id+"/item/"+item.item_id}><img className={btn_class} ></img></Link>
                <br/>
                </div>
    		);
    	});
        
        // FOR TEST CONTENT RENDERING
        let i=0;
        let test_content = this.props.test_content.map(
            (question) => {
                i++;
                return(
                    <div key={question.question_id}>
                        <input type="text"  name="question" defaultValue={question.question_id} hidden/><h6>{i}){question.question_html}</h6>
                        {   
                            question.variants.map(

                                (variant) => {

                                    let ansClass = 'variant'
                                    if(this.props.test_checked.length !== 0){
                                        let isChecked = this.props.test_checked[question.question_id][variant.id];
                                        if(isChecked)
                                            ansClass = 'correct-ans';
                                        else if(isChecked == false)
                                            ansClass = 'wrong-ans';
                                    }

                                    return(

                                        <div key={variant.id} className={ansClass}>
                                            <label>
                                            {   (question.question_type === 1 &&
                                                <input type="radio" name={question.question_id} value={variant.id} defaultChecked required/>)
                                                ||
                                                (question.question_type === 2 &&
                                                <input type="checkbox" name={question.question_id} value={variant.id} />)
                                            }    
                                                {variant.html} 
                                            </label>
                                        </div>
                                    );
                                }
                            )
                        }
                    </div>

                )                
            }
        );
        
        // VIDEO PLAYER CONSTANTS
        const videoJsOptions = {
            autoplay: true,
            controls: true,
            sources: [{
            src: this.props.active_item.item_exec_file ,
            type: 'video/mp4'
            }]
        }

		return (
            console.log("AAAAAAAA",this.props.active_item),
			<div className="main-content">
                <p>
                    {this.props.chapter.text}
                </p>
                
                {
                    this.props.active_item.length !== 0
                        &&
                    (this.props.active_item.content_type === 2  && <VideoPlayer { ...videoJsOptions } />
                    
                    ||

                    this.props.active_item.content_type !== 4 && <iframe src={this.props.active_item.item_exec_file } ></iframe>)
                }
                
                <form onSubmit={this.handleSubmit}>
                    {   
                       test_content
                    }
                    { this.props.test_content.length!==0 && this.props.test_checked.length===0 && <input type="submit"/>} 
                    {  this.props.test_checked.length!==0 && this.props.test_checked["result"]}
                </form>
                <div className="item-buttons">
                    {items_mapped}
                </div>
                
	        </div>
		);
	}
}

function mapStateToProps(state){
	return{
		chapter: state.active,
        active_item: state.active_item,
        test_content: state.test_content,
        test_checked: state.test_checked
	};
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        postTestResults:postTestResults},dispatch)
}
export default connect (mapStateToProps,mapDispatchToProps)(ChapterContent);