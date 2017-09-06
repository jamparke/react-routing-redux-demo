const reducer = (state = initialState, action) => {
    switch ( action.type ) {
        case ADD_USER:
            return {
                ...state,
                users: [...state.users, action.payload]
            }
            break;
        case DELETE_USER:
            return {
                ...state,
                // action.payload should be an index
                users: [...array.slice(0, action.payload), ...array.slice(action.payload + 1)]
            }
            break;
        case UPDATE_USER:
            return {
                ...state,
                users: state.users.map(val => val.id === action.payload.id ? { ...val, name: action.payload.name } : val)
            }
            break;
        default:
            return state;
    }

}