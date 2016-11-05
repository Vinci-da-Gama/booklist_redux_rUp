import { combineReducers } from 'redux';
import BooklistReducer from './reducer_books';
import ActiveBookReducer from './reducer_active_book';

const RootReducer = combineReducers({
	booksCollection: BooklistReducer,
	theActiveBook: ActiveBookReducer
});

export default RootReducer;