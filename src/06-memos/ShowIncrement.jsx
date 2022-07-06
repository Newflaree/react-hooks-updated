export const ShowIncrement = ({ increase }) => {

  return (
    <button
      className="btn btn-primary"
      onClick={ () => {
        increase( 5 );
      }}
    >
      Increment
    </button>
  )
}
