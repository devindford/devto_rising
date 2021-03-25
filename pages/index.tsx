import Head from 'next/head';
import { QueryClient, useQuery, QueryClientProvider } from 'react-query';
import Articles from './components/Articles';
import { ReactQueryDevtools } from 'react-query-devtools';

const toJSON = (_: Response) => _.json();
const fetcher = () => fetch(`https://dev.to/api/articles?state=rising`).then(toJSON);

export default function Home() {
  const { data, isLoading, error } = useQuery('devToData', fetcher);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (error) {
    console.error(error);
    return <h2>Error...</h2>;
  }

  return (
    <div>
      <Head>
        <title>Dev.to-rising!</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Articles data={data} />
    </div>
  );
}
