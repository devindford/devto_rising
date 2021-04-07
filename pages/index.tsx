import Footer from '../components/Footer';
import Articles from '../components/Articles';
import Header from '../components/Header';
import { useState } from 'react';
import HeadWithArgs from '../components/HeadWithArgs';

export default function Home() {
  const [sortingOrder, setSortingOrder] = useState<string>('');

  return (
    <>
      <HeadWithArgs />
      <div className='bg-purple-900 min-h-screen flex flex-col justify-start'>
        <Header setSortingOrder={setSortingOrder} />
        <Articles sortingOrder={sortingOrder} />
        <Footer />
      </div>
    </>
  );
}
