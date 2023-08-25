import * as educationActions from '../actions/actions';
import initialState from './initialState.json'


const educationReducer = (state = initialState.document, action) => {
    switch (action.type) {
        case educationActions.SET_CONTACT:
            return { ...action.payload }
        case educationActions.UPDATE_CONTACT:
            return { ...action.payload }
        default: return state
    }
}

export default educationReducer;