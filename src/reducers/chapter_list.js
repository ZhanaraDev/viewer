// export default function(){
// 	return [
// 		{
// 			id:1,
// 			title: "Tema 1",
// 			text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor"
			                      
// 		},
// 		{
// 			id:2,
// 			title: "Tema 2",
// 			text: "We'll explore how to perform side effects in the advanced walkthrough. For now, just remember that the reducer must be pure. Given the same arguments, it should calculate the next state and return it. No surprises. No side effects. No API calls. No mutations. Just a calculation.",

// 		},
// 		{
// 			id:3,
// 			title: "Tema 3",
// 			text: "The switch statement is not the real boilerplate. The real boilerplate of Flux is conceptual: the need to emit an update, the need to register the Store with a Dispatcher, the need for the Store to be an object (and the complications that arise when you want a universal app). Redux solves these problems by using pure reducers instead of event emitters.",

// 		},
// 	]
// }


// const reducer = (state = [], action) => {
//   switch (action.type) {
//     case "FETCH_REQUEST":
//       return state;
//     case "FETCH_SUCCESS": 
//       return action.payload;
//     default:
//       return state;
//   }
// }

export default function (state=[],action){
	switch(action.type){
		case "ACTION_GET_CHAPTER_LIST_SUCCEEDED":
			console.log("SUCCESS");
			return action.chapterList;
		case "ACTION_GET_CHAPTER_LIST_STARTED":
		case "ACTION_GET_CHAPTER_LIST_FAILED":
			return [];
		default:
			return state;
	}
}