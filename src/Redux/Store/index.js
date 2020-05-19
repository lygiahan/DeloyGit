import { combineReducers } from 'redux';
import { CourseReducer } from '../Reducer/CourseReducer';
import { CartReducer } from '../Reducer/CartReducer';
import { UserReducer } from '../Reducer/UserReducer';
import { AdminReducer } from '../Reducer/AdminReducer';
import { ModalReducer } from '../Reducer/ModalReducer';

export const root = combineReducers({
    CourseReducer,
    CartReducer,
    UserReducer,
    AdminReducer,
    ModalReducer
});