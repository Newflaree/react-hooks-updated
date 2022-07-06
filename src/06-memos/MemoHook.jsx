import { useMemo, useState } from 'react';
import { useCounter } from '../hooks';

const heavyStuff = ( iterationNumber = 100 ) => {
  for ( let i = 0; i < iterationNumber;  i++ ) {
    console.log( 'Ahí vamos' );
  }

  return `${ iterationNumber } iteraciones realizadas`;
}

export const MemoHook = () => {
  const { counter, increase } = useCounter( 4000 );
  const [ show, setShow ] = useState( true );

  const memorizedValue = useMemo( () => heavyStuff( counter ), [ counter ]);


  return (
    <>
      <h1>Memorize</h1>
      <h2>Counter <small>{ counter }</small></h2>

      <hr />
      
      <h4>{ memorizedValue }</h4>

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
