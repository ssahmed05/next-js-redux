import Head from 'next/head'

import { wrapper, store } from "../store/store";
import { Provider } from "react-redux";

import 'bootstrap/dist/css/bootstrap.css'
import("bootstrap/dist/js/bootstrap.min.js");

import Layout from '../Components/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Provider store={store}>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
    </>
  );
}

export default wrapper.withRedux(MyApp);
// export default wrapper MyApp


