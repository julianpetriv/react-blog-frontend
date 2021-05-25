import {
    SET_CURRENT_USER} from '../../../constants/reducerConstants';
import { data, setCurrentUser } from './userDataHandler';

const userDataReducer = (state, action) => {
    if (state === undefined) {
        return {
            data: data
        }
    };
    switch (action.type) {
        case SET_CURRENT_USER:
            return setCurrentUser(state, action);
        default:
            return state;
    }
};

export default userDataReducer;