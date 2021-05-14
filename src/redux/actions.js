import { GET_TODOS, GET_TODOS_SUCCESS, GET_TODOS_ERROR } from './types';

// API
import axios from 'axios';

const urlToDos = 'https://jsonplaceholder.typicode.com/todos/';

export const fetchToDosAction = () => {
    return async (dispatch) => {
        dispatch(getToDos());

        try {
            const { data } = await axios.get(urlToDos);
            dispatch(getToDosSuccess(data.slice(0, 12)));
          } catch (error) {
            dispatch(getToDosError("Hubo un error al obtener los to-dos"));
          }
    };
};

const getToDos = () => ({
    type: GET_TODOS,
});

const getToDosSuccess = (todos) => ({
    type: GET_TODOS_SUCCESS,
    payload: todos
});

const getToDosError = (error) => ({
    type: GET_TODOS_ERROR,
    payload: error
});