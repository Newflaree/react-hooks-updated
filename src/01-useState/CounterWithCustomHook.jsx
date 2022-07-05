import { useCounter } from '../hooks';

export const CounterWithCustomHook = () => {
  const { counter, decrement, increase, reset } = useCounter();

  return (
    <>
      <h1>Cunter With Hook: { counter }</h1>
      <hr />

      <button
        onClick={ () => increase( 2 ) }
        className="btn btn-primary"
      >
        +1
      </button>

      <button
        onClick={ reset }
        className="btn btn-primary"
      >
        Reset
      </button>

      <button
        onClick={ () => decrement( 2 ) }
        className="btn btn-primary"
      >
        -1
      </button>
    </>
  );
}
