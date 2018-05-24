import { combineReducers } from 'redux'
import ChapterReducers from './chapter_list'
import ActiveChapter from './chapter_active'
import ActiveItem from './item_active'

const allReducers = combineReducers({
	chapters: ChapterReducers,
	active: ActiveChapter,
	active_item: ActiveItem
});

export default allReducers;