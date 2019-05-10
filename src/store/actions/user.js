import { USER_LOGIN, USER_LOGOUT} from './actionsType'

export const login = user => {
    return {
        type: USER_LOGIN,
        payload: user
    }
}

export const logout = () => {
    return {
        type: USER_LOGOUT
    }
}