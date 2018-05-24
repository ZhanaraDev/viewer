export default function (state=[],action){
	switch(action.type){
		case "ACTION_GET_CHAPTER_LIST_SUCCEEDED":
			console.log("SUCCESS");
			return action.chapterList;
		case "ACTION_GET_CHAPTER_LIST_STARTED":
		case "ACTION_GET_CHAPTER_LIST_FAILED":
			return [];
		default:
			return state;
	}
}