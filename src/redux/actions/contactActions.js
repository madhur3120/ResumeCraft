import * as contactActions from './actions';

const setContact = (contact) => {
    return {
        type: contactActions.SET_CONTACT,
        payload: contact
    }
}

const updateContact = (contact) => {
    return {
        type: contactActions.UPDATE_CONTACT,
        payload: contact
    }
}

export {
    setContact,
    updateContact
}