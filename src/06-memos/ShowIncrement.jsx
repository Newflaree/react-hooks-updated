export const ShowIncrement = ({ increase }) => {

  return (
    <button
      className="btn btn-primary"
      onClick={ () => {
        increase();
      }}
    >
      Increment
    </button>
  )
}
