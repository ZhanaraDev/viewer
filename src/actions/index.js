import $ from 'jquery';
export const select = (chapter) => {
	return {
		type:"CHAPTER_SELECTED",
		payload: chapter
	}
};