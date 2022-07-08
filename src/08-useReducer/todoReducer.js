export const todoReducer = ( initialState, action ) => {
  switch ( action.types ) {
    case 'ABC':
      throw new Error( 'Action.types = ABC is not implemented' )

    default:
      return initialState;
  }
}
