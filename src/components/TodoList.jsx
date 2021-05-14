import { Table, Badge } from 'react-bootstrap';

const TodoList = ({ toDos }) => {
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                <th>Id</th>
                <th>Title</th>
                <th>Completed</th>
                </tr>
            </thead>
            <tbody>
                {toDos.map((todo, i) => {
                return (
                    <tr key={i}>
                    <td>{todo.id}</td>
                    <td>{todo.title}</td>
                    <td>
                        {todo.completed ? (
                        <Badge variant="success" className="text-light">✔</Badge>
                        ) : (
                        <Badge variant="secondary" className="text-light">❌</Badge>
                        )}
                    </td>
                    </tr>
                );
                })}
            </tbody>
            </Table>
    );
}

export default TodoList;