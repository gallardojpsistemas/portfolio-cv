import type { AppProps } from "next/app";
import "@/styles/globals.css";
import Navigation from "@/components/Navigation";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navigation />
      <Component {...pageProps} />
    </>
  );
}