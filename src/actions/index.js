import $ from 'jquery';
import * as chapterApi from '../api/chapter_list'

export const select = (chapter) => {
	console.log("CHAPTER IS SELECTED!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
	return {
		type:"CHAPTER_SELECTED",
		payload: chapter
	}
};

export const select_item = (item) => {
	return{
		type:"ITEM_SELECTED",
		payload: item
	}
};

export const getChapterList = (courseID) => (dispatch, getState) => {
	dispatch({
		type: "ACTION_GET_CHAPTER_LIST_STARTED"
	});

	chapterApi.getCourseStructure(courseID)
			.then(
				response => {
					if(response.status !== 200){
						dispatch({
							type: "ACTION_GET_CHAPTER_LIST_FAILED"
						})
					}else{
						response.text().then(
			              	value => {
			                	const responseObject = JSON.parse(value);
								dispatch({
									type: "ACTION_GET_CHAPTER_LIST_SUCCEEDED",
									chapterList: responseObject

								})
			              	}
			            );
			        
					}
				}
			)
			.catch(
				console.log("sorry")
			);
}
