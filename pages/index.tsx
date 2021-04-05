import Head from 'next/head';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import Footer from './components/Footer';
import Articles from './components/Articles';
import Header from './components/Header';
import React, { useState } from 'react';

export default function Home() {
  const queryClient = new QueryClient();
  const [sortingOrder, setSortingOrder] = useState<string>('');

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Head>
          <title>dev.to Rising!</title>
          <link rel='icon' href='/dev-ecosystem.png' />
        </Head>
        <div className='bg-purple-900 min-h-screen flex flex-col justify-start'>
          <Header setSortingOrder={setSortingOrder} />
          <Articles sortingOrder={sortingOrder} />
          <Footer />
        </div>
      </QueryClientProvider>
    </>
  );
}
