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
      <h1>Todo App 10 - <small>Pendientes: 2</small></h1>
      <hr />


      <div className='row'>

        <div className='col-7'>
          <ul className='list-group'>
            {
              todos.map( todo => (
                <li
                  key={ todo.id }
                  className='list-group-item d-flex justify-content-between'
                >
                  <span className='align-self-center'>Item 1</span>
                  <button className='btn btn-danger mx-2'>Delete</button>
                </li>
              ))
            }
          </ul>
        </div>

        <div className='col-5'>
          <h4>Add TODO</h4>
          <hr />

          <form>
            <input 
              type='text'
              placeholder='¿Qué hay que hacer?'
              className='from-control'
            />

            <button
              type='submit'
              className='btn btn-outline-primary mx-2'
            >
              Add
            </button>
          </form>
        </div>

      </div>
    </>
  );
}
