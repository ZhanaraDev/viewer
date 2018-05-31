import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {selectItem,postTestResults} from '../actions/index'
import Content from '../components/Content'
import {
  Link
} from 'react-router-dom'
import $ from 'jquery'

class ChapterContent extends Component{

    constructor(props){
        super(props)
        this.course_pk = this.props.path["course_pk"];
        this.node_id = this.props.path["node_id"];

        console.log("lc0",this.props.chapter);
        console.log("lc",this.props.active_item);
    }

    handleSubmit = e => {
        e.preventDefault();
        console.log("DATAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",);
        
        let questions = $("input[type='text'][name='question']");
        let data = {};
        for(let i=0;i<questions.length;i++){
            let selected_answer = $("input[type='radio'][name='"+questions[i].defaultValue+"']:checked");
            data[questions[i].defaultValue ] = selected_answer[0].value;
        }
        console.log(data);
        this.props.postTestResults(data);
    }

	render(){
        console.log("lc0ba",this.props.active_item);
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
        
        let i=0;
        // if(this.props.test_checked.length !== 0){
        //     console.log("hihi");
        //     console.log(this.props.test_checked);
        // }
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
                                        let isChecked =  this.props.test_checked[question.question_id][variant.id];
                                        if(isChecked)
                                            ansClass = 'correct-ans';
                                        else if(isChecked == false)
                                            ansClass = 'wrong-ans'
                                    }

                                    return(
                                        <div key={variant.id} className={ansClass}>
                                            <label>
                                                <input type="radio" name={question.question_id} value={variant.id} defaultChecked />
                                                {variant.html} 
                                            </label>
                                        </div>
                                    );
                                }
                            )
                        }
                    </div>

                )
                console.log(question.variants)
                
            }
        );

		return (
			<div className="main-content">
                <p>
                    {this.props.chapter.text}
                </p>
                
                {
                    this.props.active_item.length !== 0
                        &&
                    <iframe src={this.props.active_item} ></iframe>
                }
                
                <form onSubmit={this.handleSubmit}>
                    {   
                       test_content
                    }
                    { this.props.test_content.length!==0 && this.props.test_checked.length===0 && <input type="submit"/>} 
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
    return bindActionCreators({selectItem:selectItem,
        postTestResults:postTestResults},dispatch)
}
export default connect (mapStateToProps,mapDispatchToProps)(ChapterContent);