import { combineReducers } from 'redux'
import ChapterReducers from './chapter_list'
import ActiveChapter from './chapter_active'

const allReducers = combineReducers({
	chapters: ChapterReducers,
	active: ActiveChapter
});

export default allReducers;