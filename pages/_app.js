import Head from 'next/head';
import AppFooter from '../src/components/ui/AppFooter';
import AppHeader from '../src/components/ui/AppHeader';
import { AppProvider } from '../src/contexts/AppContext';
import '../styles/globals.css';
import '../styles/styles.scss';

const MyApp = ({ Component, pageProps }) => {
  return (
    <AppProvider>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <title>UniteInfo</title>
      </Head>

      <AppHeader />
      <Component {...pageProps} />
      <AppFooter />
    </AppProvider>
  );
};

export default MyApp;
