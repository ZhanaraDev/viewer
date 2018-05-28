import { combineReducers } from 'redux'
import ChapterReducers from './chapter_list'
import ActiveChapter from './chapter_active'
import ActiveItem from './item_active'
import TestContent from './test_content'

const allReducers = combineReducers({
	chapters: ChapterReducers,
	active: ActiveChapter,
	active_item: ActiveItem,
	test_content: TestContent
});

export default allReducers;