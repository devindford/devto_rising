import Head from 'next/head';
import Footer from '../components/Footer';
import Articles from '../components/Articles';
import Header from '../components/Header';
import{ useState } from 'react';

export default function Home() {
  const [sortingOrder, setSortingOrder] = useState<string>('');

  return (
    <>
      <Head>
        <title>dev.to Rising!</title>
        <link rel='icon' href='/dev-ecosystem.png' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta charSet='utf-8' />
      </Head>
      <div className='bg-purple-900 min-h-screen flex flex-col justify-start'>
        <Header setSortingOrder={setSortingOrder} />
        <Articles sortingOrder={sortingOrder} />
        <Footer />
      </div>
    </>
  );
}
