import { useFetch } from '../hooks';

const url = 'https://www.breakingbadapi.com/api/quotes/1';

export const MultipleCustomHook = () => {
  const { data, isLoading, hasError } = useFetch( url );

  console.log( data, isLoading, hasError );

  return (
    <>
      <h1>BreakingBad Quotes</h1>
      <hr />
    </>
  );
}
