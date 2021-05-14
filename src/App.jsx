import { useState, useEffect } from 'react';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { fetchToDosAction } from './redux/actions';

// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

// API
import axios from 'axios';

// Components
import TodoList from './components/TodoList';

const urlToDos = 'https://jsonplaceholder.typicode.com/todos/';

function App() {
  // States
  const [toDos, setToDos] = useState([]);
  const [newToDo, setNewToDo] = useState('');

  // Redux 
  const dispatch = useDispatch();
  const { toDos: toDosStore, isLoading, error } = useSelector((state) => state.toDos);
    
  // Functions

  //////////////// Guardar Cambios en Input ////////////////
  const handleChange = (e) => {
    setNewToDo(e.target.value);
  };

  //////////////// Submit al endpoint ////////////////
  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = {
      userId: 1,
      title: newToDo,
      completed: false
    }

    try {
      const { data: todoAdded } = await axios.post(urlToDos, body);   // SE HACE POST EL TODO AL ENDPOINT
      setToDos([todoAdded, ...toDos]);  //  OBTENEMOS LA RESPUESTA Y LA AGREGAMOS AL STATE
      setNewToDo("");
    } catch (error) {
      console.log(error);
    }
  };

  // Lifecycle
  useEffect(() => {
    dispatch(fetchToDosAction());
    // eslint-disable-next-line
  }, []);


  return (
    <Container className="vh-100 d-flex justify-content-center align-items-center">
      <Row>
        <Col xs="auto">
          <h1>ToDo List</h1>
          <Form inline className="my-2" onSubmit={handleSubmit}>
            <Form.Group className="mr-3">
              <Form.Control 
                placeholder='To-do title' 
                value={newToDo} 
                onChange={handleChange}
              />
            </Form.Group>
            <Button variant='primary' type='submit'>
              Add to-do
            </Button>
          </Form>
          {isLoading ? 'Loading...' : error ? error : <TodoList toDos={toDosStore} />} 
        </Col>
      </Row>
    </Container>
  );
}

export default App;
