import { useEffect, useState } from 'react';
// Components
import { Message } from './Message';

export const SimpleForm = () => {
  const [ formState, setFormState ] = useState({
    username: 'Test2',
    email: 'test@email.com' 
  });

  const { username, email } = formState;

  const onInputChange = ({ target }) => {
    const { name, value } = target;

    setFormState({
      ...formState,
      [ name ]: value
    });
  }

  useEffect( () => {
    //console.log( 'useEffect callled' );
  }, []);

  useEffect( () => {
    //console.log( 'formState changed' );
  }, [ formState ]);

  useEffect( () => {
    //console.log( 'email changed' );
  }, [ email ]);


  return (
    <>
      <h1>Simple Form</h1>
      <hr />

      <input 
        type='text'
        className='form-control mb-2'
        placeholder='Username'
        name='username'
        value={ username }
        onChange={ onInputChange }
      /> 

      <input 
        type='email'
        className='form-control mb-2'
        placeholder='Email'
        name='email'
        value={ email }
        onChange={ onInputChange }
      /> 

      {
        ( username === 'Test2' ) && <Message />
      }
    </>
  )
}
