import '../styles/globals.css';
import Head from 'next/head';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Samba Diaw | Full-Stack Developer</title>
        <meta name="description" content="Samba's website" />
        <link rel="icon" href="/sd-logo-white.svg" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
