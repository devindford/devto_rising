import ReactLoading from 'react-loading';

const Loader = () => {
  return (
    <div className='flex flex-col justify-center mt-auto content-center items-center h-full w-full'>
      <ReactLoading type='bars' color='#ddd6fe' width={'100px'} />
      <div className='text-2xl text-purple-200 mt-6'>Loading...</div>
    </div>
  );
};

export default Loader;
