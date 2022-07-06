import { useFetch } from '../hooks';

const url = 'https://www.breakingbadapi.com/api/quotes/1';

export const MultipleCustomHook = () => {
  const { data, isLoading, hasError } = useFetch( url );
  const { author, quote } = !!data && data[0];

  return (
    <>
      <h1>BreakingBad Quotes</h1>
      <hr />

      {
        isLoading

          ? (
            <div className='alert alert-info text-center'>
              Loading...
            </div> 
          )

          : (
            <blockquote className='blockquote text-end'>
              <p className='mb-1'>{ quote }</p>
              <footer className='blockquote-footer mt-1'> { author }</footer>
            </blockquote>
          )
      }

      <button className='btn btn-primary'>
        Next quote
      </button>

    </>
  );
}
