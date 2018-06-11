export default function(state=[], action){
	switch(action.type){
		case "BLICK_IS_ACTIVE":
			return action.payload;
		default:
			return state;
	}
}