// Components
import { TodoItem } from "./TodoItem";

export const TodoList = ({ todos = [] }) => {

  return (
    <ul className='list-group'>
      {
        todos.map( ({ id, description }) => (
          <TodoItem key={ id } desc={ description } />
        ))
      }
    </ul>
  );
}

