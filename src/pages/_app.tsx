import { LoadingProvider } from "@contexts/useLoading";
import "./css/main.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <LoadingProvider>
      <Component {...pageProps} />
    </LoadingProvider>
  );
}
