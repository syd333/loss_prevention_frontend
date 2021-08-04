export const authReducer = (state = {}, action) => {
    switch(action.type) {
        case "SET_USER_AUTH":
            return {...state, ...action.payload }
            default:
                return state;
    }
};