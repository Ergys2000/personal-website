import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head';
import { NextPage } from 'next';
import { ReactElement, ReactNode } from 'react';

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
		<div className="bg-gray-900 w-screen h-screen flex justify-center items-center">
      {getLayout(<Component {...pageProps} />)}
    </div>
  );
}

export default MyApp
