import { useForm } from '../hooks';

export const FormWithCustomHook = () => {

  const {
    onInputChange,
    username,
    email,
    password 
  } = useForm({
    username: '',
    email: '',
    password: ''
  })


  return (
    <>
      <h1>Form With Custom Hook</h1>
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

      <input 
        type='password'
        className='form-control mb-2'
        placeholder='Contraseña'
        name='password'
        value={ password }
        onChange={ onInputChange }
      /> 
    </>
  )
}
