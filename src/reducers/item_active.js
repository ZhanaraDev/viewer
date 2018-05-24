export default function(state=[], action){
	switch(action.type){
		case "ITEM_SELECTED":
			console.log("ITEM IS ACTIVE !!!!!!!!!!!!!!!!");
			return action.payload;
		default:
			return [];
	}
}