import Head from 'next/head';
import { useQuery } from 'react-query';
import Footer from './components/Footer';
import Articles from './components/Articles';
import Header from './components/Header';
import React from 'react';

const toJSON = (_: Response) => _.json();
const fetcher = () => fetch(`https://dev.to/api/articles?state=rising&per_page=30`).then(toJSON);

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
    <div className='bg-purple-200'>
      <Head>
        <title>dev.to Rising!</title>
        <link rel='icon' href='/dev-ecosystem.png' />
      </Head>
      <Header />
      <Articles data={data} />
      <Footer />
    </div>
  );
}
