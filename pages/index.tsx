import Head from 'next/head';
import { useQuery } from 'react-query';
import Footer from './components/Footer';
import Articles from './components/Articles';
import Header from './components/Header';
import React, { useEffect, useState } from 'react';
import { sortAscending, sortDescending } from '../utils/helperFunctions';
import Dropdown from './components/Dropdown';

const toJSON = (_: Response) => _.json();
const fetcher = () => fetch(`https://dev.to/api/articles?state=rising&per_page=30`).then(toJSON);

export default function Home() {
  const { data, isLoading, error, isFetching } = useQuery('devToData', fetcher);
  const [selectedValue, setSelectedValue] = useState<string>('unsorted');

  if (isLoading || isFetching) {
    return <h2>Loading...</h2>;
  }
  if (error) {
    console.error(error);
    return <h2>Error...</h2>;
  }

  return (
    <div className='bg-purple-900 '>
      <Head>
        <title>dev.to Rising!</title>
        <link rel='icon' href='/dev-ecosystem.png' />
      </Head>
      <Header setSelectedValue={setSelectedValue} />
      {selectedValue === 'unsorted' && <Articles data={data.reverse()} />}
      {selectedValue === 'descending' && <Articles data={sortDescending(data)} />}
      {selectedValue === 'ascending' && <Articles data={sortAscending(data)} />}
      <Footer />
    </div>
  );
}
