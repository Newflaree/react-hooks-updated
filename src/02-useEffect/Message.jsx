import { useEffect } from 'react';

export const Message = () => {
  useEffect( () => {
    console.log( 'Message mounted' );

    return () => {
      console.log( 'Message unmounted' );
    }
  });

  return (
    <>
      <h3>Already exists this user</h3>
    </>
  );
}
