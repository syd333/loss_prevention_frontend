export const setAuth = auth => {
    return{
        type: "SET_USER_AUTH",
        payload: auth.user
    }
}