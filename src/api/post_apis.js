import { LOCAL_SERVER_URL, LOCAL_REST_API_URL } from '../settings/base';

const checkTestUrl = LOCAL_REST_API_URL + "test/"+"check_test/";

export const postTestResults = (data) => (

	fetch(
		checkTestUrl,
		{
			method: "POST",
			headers:{
				"Accept":"application/json",
				"Content-Type":"application/json",
			},
			body:JSON.stringify(data)
		}
	)
);

