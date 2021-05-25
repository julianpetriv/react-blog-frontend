export const login = {
    success: false,
    error: null
};

export const loginStarted = state => {
    return {
        ...state,
        login: {
            success: false,
            error: null
        }
    }
};

export const loginSuccess = state => {
    return {
        ...state,
        login: {
            success: true,
            error: null
        }
    }
};

export const loginFailed = (state, action) => {
    return {
        ...state,
        login: {
            success: false,
            error: action.payload
        }
    }
};
 
