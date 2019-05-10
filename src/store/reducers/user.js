import { USER_LOGIN, USER_LOGOUT} from '../actions/actionsType'

const initialState = {
    name: null,
    email: null,
    sobrenome: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_LOGIN:
            return {
            ...state,
            name: action.payload.name,
            email: action.payload.email,
            sobrenome: action.payload.sobrenome

            }

        case USER_LOGOUT:
            return {
                ...state,
                name: null,
                email: null,
                sobrenome: null
                }
        default:
            return state
    }
}

export default reducer