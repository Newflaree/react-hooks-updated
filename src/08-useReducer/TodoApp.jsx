import { useReducer } from 'react';
// Components
import { TodoAdd, TodoList } from './';
// Reducer
import { todoReducer } from './todoReducer';

const initializerArg = [
  {
    id: new Date().getTime(),
    description: 'Recolectar piedra del alma',
    done: false
  },
  {
    id: new Date().getTime() * 2,
    description: 'Recolectar piedra del tiempo',
    done: false
  },
  {
    id: new Date().getTime() * 3,
    description: 'Recolectar piedra del poder',
    done: false
  }
];


export const TodoApp = () => {

  const handleNewTodo = ( todo ) => {
    console.log({ todo });
  }

  const [ todos, dispatch  ] = useReducer( todoReducer, initializerArg );

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
