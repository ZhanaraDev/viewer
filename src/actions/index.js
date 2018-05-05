export const select = (chapter) => {
	//alert(chapter.text);
	return {
		type:"CHAPTER_SELECTED",
		payload: chapter
	}
};