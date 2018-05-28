export default function(state=[],action){
	console.log("in da reducer");
	switch(action.type){
		case "ACTION_GET_TEST_SUCEEDED":
			console.log("hihihi");
			return action.testJSON;
		case "ACTION_GET_TEST_STARTED":
		case "ACTION_GET_TEST_FAILED":
			return [];
		default:
			return [];
	}
}