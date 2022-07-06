import { useCallback, useState } from 'react';
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {
  const [ counter, setCounter ] = useState( 10 );

  const increase = useCallback( (value = 1) => {
    setCounter( (c) => c + value );
  }, []);

  /*
  const increase = () => {
    setCounter( counter + 1 );
  }
    * */

  return (
    <>
      <h1>useCallback Hook: { counter }</h1>
      <hr />

      <ShowIncrement increase={ increase } />
    </>
  );
}
