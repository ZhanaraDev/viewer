import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {selectItem} from '../actions/index'
import Content from '../components/Content'
import {
  Link
} from 'react-router-dom'

class ChapterContent extends Component{

    constructor(props){
        super(props)
        this.course_pk = this.props.path["course_pk"];
        this.node_id = this.props.path["node_id"];

        console.log("lc0",this.props.chapter);
        console.log("lc",this.props.active_item);
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
                    <Link to={"/course/"+this.course_pk+"/nodes/"+this.node_id+"/item/"+item.item_id}><img className={btn_class} ></img></Link>
                <br/>
                </div>
    		);
    	});
        
        let i=0;
        let test_content = this.props.test_content.map(
            (question) => {
                i++;
                return(
                    <div key={question.question_id}>
                        <h6>{i}){question.question_html}</h6>
                        {
                            question.variants.map(
                                (variant) => {
                                        return(
                                            <div key={variant.id}>
                                                <label>
                                                <input type="radio" name={variant.id} defaultChecked={false} disabled={false} value={variant.html} />
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
                <h3>hello</h3>
                
                {
                    this.props.active_item.length !== 0
                        &&
                    <iframe src={this.props.active_item} ></iframe>
                }
                <form method="post">
                    {   
                       test_content
                    }
                    <input type="submit"/>
                </form>
                <div className="item-buttons">
                    {items_mapped}
                </div>
                
	        </div>
		);
	}
}

function mapStateToProps(state){
    console.warn(1, state);
	return{
		chapter: state.active,
        active_item: state.active_item,
        test_content: state.test_content
	};
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({selectItem:selectItem},dispatch)
}
export default connect (mapStateToProps,mapDispatchToProps)(ChapterContent);