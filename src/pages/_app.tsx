import { LoadingProvider } from "@contexts/useLoading";
import "@global/css/main.css";
import { ThemeProvider } from "styled-components";
import { theme } from '@theme/index'

export default function MyApp({ Component, pageProps }) {
  return (
    <LoadingProvider>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </LoadingProvider>
  );
}
