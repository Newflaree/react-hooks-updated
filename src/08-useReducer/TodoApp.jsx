// Custom Hooks
import { useTodo } from '../hooks';
// Components
import { TodoAdd, TodoList } from './';


export const TodoApp = () => {
  const {
    todos,
    todosCount,
    pendingTodosCount,
    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo
  } = useTodo();

  return (
    <>
      <h1>Todo App: { todosCount } - <small>Pendientes: { pendingTodosCount }</small></h1>
      <hr />

      <div className='row'>
        <div className='col-7'>

          <TodoList
            todos={ todos }
            onDeleteTodo={ handleDeleteTodo }
            onToggleTodo={ handleToggleTodo }
          />

        </div>
        <div className='col-5'>

          <h4>Add TODO</h4>
          <hr />

          <TodoAdd
            onNewTodo={ handleNewTodo }
          />

        </div>

      </div>
    </>
  );
}
