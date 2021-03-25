import { QueryClient, QueryClientProvider } from "react-query";
import "tailwindcss/tailwind.css";
import "../styles/globals.css";
const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}
export default MyApp;
