import { SERVER_URL, REST_API_URL,STD_HEADERS} from '../settings/base';

const checkTestUrl = REST_API_URL + "test/"+"check_test/";

export const postTestResults = (data) => (

	fetch(
		checkTestUrl,
		{
			method: "POST",
			headers: STD_HEADERS,   
			body:JSON.stringify(data)
		}
	)
);

