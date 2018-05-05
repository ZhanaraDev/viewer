import $ from 'jquery';
export const select = (chapter) => {
	//alert(chapter.text);
	//$(chapter.id).toggleClass('opened');
	//console.log("chid",$(chapter.id))
	return {
		type:"CHAPTER_SELECTED",
		payload: chapter
	}
};