export default function(state=[],action){
	switch(action.type){
		case "ACTION_POST_TEST_SUCEEDED":
			return action.data;
		case "ACTION_POST_TEST_FAILED":
			return [];
		default:
			return [];
	}
}