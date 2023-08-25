import * as educationActions from './actions';

const setEducation = (education) => {
    return {
        type: educationActions.SET_EDUCATION,
        payload: education
    }
}

const updateEducation = (education) => {
    return {
        type: educationActions.UPDATE_EDUCATION,
        payload: education
    }
}

export {
    setEducation,
    updateEducation
}