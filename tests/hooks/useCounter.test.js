import { act, renderHook } from '@testing-library/react';
import { useCounter } from '../../src/hooks/useCounter';

describe( 'Pruebas en el useCounter', () => {

  test( 'Debe de retornar los valores por defecto', () => {
    const { result } = renderHook( () => useCounter() );
    const { counter, decrement, increase, reset } = result.current;

    expect( counter ).toBe( 10 );
    expect( decrement ).toEqual( expect.any( Function ) );
    expect( increase ).toEqual( expect.any( Function ) );
    expect( reset ).toEqual( expect.any( Function ) );
  });

  test( 'Debe de generar el counter con el valor de 100', () => {
    const { result } = renderHook( () => useCounter( 100 ) );
    const { counter } = result.current;

    expect( counter ).toBe( 100 );
  });

  test( 'Debe de incrementar el contador', () => {
    const { result } = renderHook( () => useCounter() );
    const { increase } = result.current;

    act( () => {
      increase();
      increase(2);
    });

    expect( result.current.counter ).toBe( 13 );
  });

  test( 'Debe de decrementar el contador', () => {
    const { result } = renderHook( () => useCounter() );
    const { decrement } = result.current;

    act( () => {
      decrement();
      decrement(2);
    });

    expect( result.current.counter ).toBe( 7 );
  });

  test( 'Debe establecer valor predefinido', () => {
    const { result } = renderHook( () => useCounter() );
    const { reset, decrement } = result.current;

    act( () => {
      decrement();
      reset();
    });

    expect( result.current.counter ).toBe( 10 );
  });
});
