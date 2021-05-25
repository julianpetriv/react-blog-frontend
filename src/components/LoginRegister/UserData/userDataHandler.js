export const data = {
    //сюди попададють усі дані по юзеру
};

export const setCurrentUser = (state, action) => {
    return {
        data: action.payload,
        isAuthenticated: action.payload.hasOwnProperty("id")
    };
};