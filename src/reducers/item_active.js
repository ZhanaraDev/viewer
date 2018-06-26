export default function(state=[], action){
	switch(action.type){
		case "ITEM_SELECTED":
			return action.payload;
		case "ACTION_GET_TEST_SUCEEDED":
		case "CHAPTER_SELECTED":
			return [];
		default:
			return state;
	}
}