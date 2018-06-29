import $ from 'jquery';
import * as apiGET from '../api/get_apis'
import * as apiPOST from '../api/post_apis'

export const highlightActiveBlock = (blockId) => {
	return{
		type: "BLOCK_IS_ACTIVE",
		payload: blockId
	}
}
export const select = (chapter) => {
	return {
		type:"CHAPTER_SELECTED",
		payload: chapter
	}
};

export const selectItem = (item) => {
	return{
		type:"ITEM_SELECTED",
		payload: item
	}
};

export const getChapterList = (courseID) => (dispatch, getState) => {
	dispatch({
		type: "ACTION_GET_CHAPTER_LIST_STARTED"
	});

	apiGET.getCourseStructure(courseID)
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
				(e)=>{console.log(e)}
			);
}

export const getTest = (itemPK) => (dispatch) => {
	dispatch({
		type: "ACTION_GET_TEST_STARTED"
	});

	apiGET.getTest(itemPK)
		.then(
			response => {
				if(response.status !== 200){
					dispatch({
						type:"ACTION_GET_TEST_FAILED"
					})
				}else{
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
		).catch(
			(e)=>{console.log(e)}
		);

}

export const postTestResults = (data) => (dispatch) => {
	apiPOST.postTestResults(data)
		.then(
			response => {
				if(response.status !== 200){
					dispatch({
						type:"ACTION_POST_TEST_FAILED"
					})
				}
				else{
					response.text().then(
						value => {
							const responseObject = JSON.parse(value);
							dispatch({
								type:"ACTION_POST_TEST_SUCEEDED",
								data: responseObject
							})
						}
					)
				}
			}
		).catch(
			
			(e)=>{console.log(e)}
		);

}