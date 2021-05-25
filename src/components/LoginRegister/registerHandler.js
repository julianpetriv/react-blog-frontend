export const verifyPhoneNumber = {
    success: false,
    error: null,
    isRegistered: "",
    firstname: ""
};

export const verifyPhoneNumberStarted = state => {
    return {
        ...state,
        verifyPhoneNumber: {
            ...state.verifyPhoneNumber,
            success: false,
            error: null
        }
    }
};
export const verifyPhoneNumberReset = state => {
    return {
        ...state,
        verifyPhoneNumber: {
            ...state.verifyPhoneNumber,
            success: false,
            error: null
        }        
    };
};
export const verifyPhoneNumberSuccess = (state, action) => {
    return {
        ...state,
        verifyPhoneNumber: {
            success: true,
            error: null,
            isRegistered: action.payload.isRegistered,
            firstname: action.payload.firstName
        }        
    };
};
export const verifyPhoneNumberFailed = (state, action) => {
    return {
        ...state,
        verifyPhoneNumber: {
            success: false,
            error: action.payload,
            isRegistered: "",
            firstname: ""
        }
    };
};