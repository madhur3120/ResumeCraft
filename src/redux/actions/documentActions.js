import * as documentActions from './actions';


const setDocument = (skinCd) => {
    return {
        type: documentActions.SET_SKIN,
        payload: {
            id: uuidv4(),
            skinCd: skinCd
        }
    }
}

const updateDocument = (skinCd) => {
    return {
        type: documentActions.UPDATE_SKIN,
        payload: {
            skinCd: skinCd
        }
    }
}

export {
    setDocument,
    updateDocument
}