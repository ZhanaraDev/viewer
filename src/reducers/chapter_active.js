export default function(state=[], action){
	switch(action.type){
		case "CHAPTER_SELECTED":
			console.log("CHAPTER IS ACTIVE !!!!!!!!!!!!!!!!");
			return action.payload;
		default:
			return state;
	}
}