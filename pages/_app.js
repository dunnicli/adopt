import Navbar from "../components/Navbar";
import "../styles/globals.css";
import Head from "next/head";
import { SessionProvider } from "next-auth/react";


export default function App({ Component, pageProps }) {
  return (
    <SessionProvider>
    <>
    <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Component {...pageProps} />
    </>
    </SessionProvider>
  );
}