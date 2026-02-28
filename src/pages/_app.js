import { Fragment, useEffect } from "react";
import Head from "next/head";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { wrapper } from "@/store";
import { setProducts } from "@/store/slices/product-slice";
import products from "@/data/products.json";
import Preloader from "@/components/preloader";

import 'react-toastify/dist/ReactToastify.css';
import "animate.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import 'lightgallery/scss/lightgallery.scss';
import 'lightgallery/scss/lg-zoom.scss';
import 'react-modal-video/scss/modal-video.scss';
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/counter.css";
import '../assets/sass/style.scss';
import '../assets/responsive.css';

const MyApp = ({ Component, ...rest }) => {
  const { store, props } = wrapper.useWrappedStore(rest);
  useEffect(() => {
    store.dispatch(setProducts(products));
  }, []);

  return (
    <Fragment>
      <Head>
        <title>Quarter - Real Estate NextJs Template</title>
        <meta name="description" content="Quarter - Real Estate Nextjs Template" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Provider store={store}>
        <PersistGate persistor={store.__persistor} loading={<Preloader />}>
          <Component {...props.pageProps} />
        </PersistGate>
      </Provider>
    </Fragment>
  );
};

export default MyApp;