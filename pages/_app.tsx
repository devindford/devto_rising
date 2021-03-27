import '../styles/globals.css';
import { QueryClient, QueryClientProvider } from 'react-query';
const queryClient = new QueryClient();
import ReactGA from 'react-ga';
ReactGA.initialize('UA-182972388-1');
ReactGA.pageview('https://devtorising.com');

function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}
export default MyApp;
