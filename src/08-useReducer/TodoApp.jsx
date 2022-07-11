import { useEffect, useReducer } from 'react';
// Components
import { TodoAdd, TodoList } from './';
// Reducer
import { todoReducer } from './todoReducer';

const initialState = [
  /*
  {
    id: new Date().getTime(),
    description: 'Recolectar piedra del alma',
    done: false
  },
  * */
];

const init = () => {
  return JSON.parse( localStorage.getItem( 'todos' ) ) || [];
}


export const TodoApp = () => {
  const [ todos, dispatch  ] = useReducer( todoReducer, initialState, init );

  useEffect( () => {
    localStorage.setItem( 'todos', JSON.stringify( todos ) );
  }, [todos] )

  const handleNewTodo = ( todo ) => {
    const action = {
      type: '[TODO] Add Todo',
      payload: todo
    }

    dispatch( action );
  }

  return (
    <>
      <h1>Todo App 10 - <small>Pendientes: 2</small></h1>
      <hr />

      <div className='row'>
        <div className='col-7'>
          <TodoList todos={ todos } />
        </div>
        <div className='col-5'>

          <h4>Add TODO</h4>
          <hr />

          <TodoAdd onNewTodo={ handleNewTodo } />
        </div>

      </div>
    </>
  );
}
