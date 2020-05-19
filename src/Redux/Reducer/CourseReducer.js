import { GET_COURSE, CATEGORY_COURSE, CHOOSE_CATEGORY, LIST_CATEGORY, COURSE_DETAIL, CATEGORY_HEADER, SEARCH_COURSE } from "../../actions/type";

let initialState = {
    courses: [],
    categoryCourse: [],
    chooseCategory: 'BackEnd',
    coursedetail: '',
    coursecategory: ''

};

export const CourseReducer = (state = initialState, action) => {

    switch (action.type) {
        case GET_COURSE:
            {
                state.courses = action.data;
                return {...state }
            }
        case CATEGORY_COURSE:
            {
                state.categoryCourse = action.data;
                return {...state }
            }
        case CHOOSE_CATEGORY:
            {
                state.chooseCategory = action.data;
                return {...state }
            }
        case LIST_CATEGORY:
            {
                state.courses = action.data;
                return {...state }
            }
        case COURSE_DETAIL:
            {
                state.coursedetail = action.data;
                return {...state }
            }
        case CATEGORY_HEADER:
            {
                state.coursecategory = action.data;
                return {...state }
            }
        case SEARCH_COURSE:
            {
                console.log(action.data)
                let search = action.data.toUpperCase().trim();
                state.coursedetail = search;
                return {...state }
            }
        default:
            return state;
    }
}