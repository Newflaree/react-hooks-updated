import { render, screen } from '@testing-library/react';
import { MultipleCustomHook } from '../../src/03-examples/MultipleCustomHooks';

describe( 'Pruebas en <MultipleCustomHook />', () => {
  test( 'Debe de mostrar el componente por defecto', () => {
    render( <MultipleCustomHook /> );

    expect( screen.getByText( 'Loading...' ) )
    expect( screen.getByText( 'BreakingBad Quotes' ) )

    const nextBtn = screen.getByRole( 'button', {name: 'Next quote'} );
    expect( nextBtn.disabled ).toBeTruthy();
    //screen.debug();
  });

});

