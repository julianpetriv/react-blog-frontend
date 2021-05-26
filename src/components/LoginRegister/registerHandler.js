export const verifyPhoneNumber = {
    success: false,
    error: null,
    name: ""
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
            name: action.payload.name
        }        
    };
};
export const verifyPhoneNumberFailed = (state, action) => {
    return {
        ...state,
        verifyPhoneNumber: {
            success: false,
            error: action.payload,
            name: ""
        }
    };
};