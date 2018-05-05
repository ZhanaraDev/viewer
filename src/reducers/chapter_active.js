export default function(state=[], action){
	switch(action.type){
		case "CHAPTER_SELECTED":
			return action.payload;
		default:
			return state; 
	}
}