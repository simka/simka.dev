import { AppProps } from "next/app";
import "@fontsource/work-sans";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
