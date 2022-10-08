import "./css/main.css";
import { LoadingProvider } from "../src/contexts/useLoading";

export default function MyApp({ Component, pageProps }) {
  return (
    <LoadingProvider>
      <Component {...pageProps} />
    </LoadingProvider>
  );
}
