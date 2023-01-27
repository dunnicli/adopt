import Navbar2 from "../components/Navbar2";
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
      <hr className="border-4 border-red-500 cursor-pointer hover:border-red-500 duration-500"/>
      <Navbar2 />
      <hr className="border-dashed border-2 border-yellow-200"/>
      <div class="container mx-auto px-4">
      <Component {...pageProps} />
      </div>
    </>
    </SessionProvider>
  );
}