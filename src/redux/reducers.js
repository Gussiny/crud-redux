import { GET_TODOS, GET_TODOS_SUCCESS, GET_TODOS_ERROR } from './types';

const initialState = {
    toDos: [],
    isLoading: false,
    error: null
}

export const todosReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_TODOS:
            return {
                ...state,
                error: null,
                isLoading: true
            }

        case GET_TODOS_SUCCESS:
            return {
                ...state,
                error: null,
                isLoading: false,
                toDos: action.payload
            }

        case GET_TODOS_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }

        default:
            return state;
    }
}