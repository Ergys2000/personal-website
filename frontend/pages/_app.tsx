import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head';
import { NextPage } from 'next';
import { ReactElement, ReactNode } from 'react';
import { ChakraProvider } from '@chakra-ui/react';

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <ChakraProvider>
      <div className="bg-gray-800 w-screen h-screen flex justify-center items-center">
        {getLayout(<Component {...pageProps} />)}
      </div>
    </ChakraProvider>
  );
}

export default MyApp
