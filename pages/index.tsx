import Head from 'next/head';
import { useQuery } from 'react-query';
import Footer from './components/Footer';
import Articles from './components/Articles';
import Header from './components/Header';
import React, { useState } from 'react';

const toJSON = (_: Response) => _.json();
const fetcher = () => fetch(`https://dev.to/api/articles?state=rising&per_page=30`).then(toJSON);

export default function Home() {
  const { data, isLoading, error, isFetching } = useQuery('devToData', fetcher);
  const [sortingOrder, setSortingOrder] = useState<string>('');

  if (isLoading || isFetching) {
    return <h2>Loading...</h2>;
  }
  if (error) {
    console.error(error);
    return <h2>Error...</h2>;
  }

  return (
    <>
      <Head>
        <title>dev.to Rising!</title>
        <link rel='icon' href='/dev-ecosystem.png' />
      </Head>
      <div className='bg-purple-900 min-h-screen flex flex-col justify-start'>
        <Header sortingOrder={sortingOrder} setSortingOrder={setSortingOrder} />
        <Articles data={data} sortingOrder={sortingOrder} setSortingOrder={setSortingOrder} />
        <Footer />
      </div>
    </>
  );
}
