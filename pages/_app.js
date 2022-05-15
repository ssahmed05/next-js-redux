import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.css'
import Layout from '../Components/Layout';
import("bootstrap/dist/js/bootstrap.min.js");


import { useEffect } from "react";


function MyApp({ Component, pageProps }) {

  return (
    <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </>
  );
}

export default MyApp


