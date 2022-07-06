import {useState} from 'react';
import { useCounter } from '../hooks';
import {Small} from './Small';

export const Memorize = () => {
  const { counter, increase } = useCounter( 1 );

  const [ show, setShow ] = useState( true )

  return (
    <>
      <h1>Memorize</h1>
      <h2>Counter <Small value={ counter } /></h2>

      <hr />

      <button
        onClick={ () => increase() }
        className="btn btn-primary"
      >
        +1
      </button>

      <button
        onClick={ () => setShow( !show ) }
        className="btn btn-outline-primary"
      >
        Show/Hide { JSON.stringify( show ) }
      </button>
    </>
  );
}
