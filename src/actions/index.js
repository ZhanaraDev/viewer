import $ from 'jquery';
import * as api from '../api/fetch_apis'

export const select = (chapter) => {
	console.log("CHAPTER IS SELECTED!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
	return {
		type:"CHAPTER_SELECTED",
		payload: chapter
	}
};

export const selectItem = (item) => {
	console.log("KINDA ME ");
	return{
		type:"ITEM_SELECTED",
		payload: item
	}
};

export const getChapterList = (courseID) => (dispatch, getState) => {
	dispatch({
		type: "ACTION_GET_CHAPTER_LIST_STARTED"
	});

	api.getCourseStructure(courseID)
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

export const getTest = (itemPK) => (dispatch) => {
	console.log("GETTING IT");
	dispatch({
		type: "ACTION_GET_TEST_STARTED"
	});

	api.getTest(itemPK)
		.then(
			response => {
				if(response.status !== 200){
					dispatch({
						type:"ACTION_GET_TEST_FAILED"
					})
				}else{
					console.log("GETTING IT111");
					response.text().then(
						value => {
							const responseObject = JSON.parse(value);
							dispatch({
								type:"ACTION_GET_TEST_SUCEEDED",
								testJSON: responseObject
							})
						}
					);
				}
			}
		).catch(console.log("sorry_test"));

}