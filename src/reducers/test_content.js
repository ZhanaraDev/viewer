export default function(state=[],action){
	switch(action.type){
		case "ACTION_GET_TEST_SUCEEDED":
			return action.testJSON;
		case "ACTION_GET_TEST_STARTED":
		case "ACTION_GET_TEST_FAILED":
			return [];
		case "ACTION_POST_TEST_SUCEEDED":
			return action.testJSON;
		default:
			return [];
	}
}