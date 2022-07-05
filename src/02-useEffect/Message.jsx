import { useEffect, useState } from 'react';

export const Message = () => {
  const [ coords, setCoods ] = useState({ x: 0, y: 0 });

  useEffect( () => {
    const onMouseMove = ({ x, y }) => {
      setCoods({ x, y });
    }

    window.addEventListener( 'mousemove', onMouseMove );

    return () => {
      window.removeEventListener( 'mousemove', onMouseMove );
    }
  });


  return (
    <>
      <h3>Already exists this user</h3>

      {
        JSON.stringify( coords )
      }
    </>
  );
}
