import { QueryClient, QueryClientProvider } from 'react-query';
import '../styles/globals.css';
import ReactGA from 'react-ga';
import { useEffect } from 'react';
ReactGA.initialize('UA-182972388-1');
const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}
export default MyApp;
