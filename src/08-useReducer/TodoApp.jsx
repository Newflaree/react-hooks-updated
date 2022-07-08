import { useReducer } from 'react';
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
    description: 'Recolectar piedra del alma',
    done: false
  },
  {
    id: new Date().getTime() * 3,
    description: 'Recolectar piedra del alma',
    done: false
  }
];

export const TodoApp = () => {

  const [ todos, dispatch  ] = useReducer( todoReducer, initializerArg );

  return (
    <>
      <h1>Todo App</h1>
      <hr />

      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
    </>
  );
}
