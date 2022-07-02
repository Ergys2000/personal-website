import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
		<div className="bg-gray-900 w-screen h-screen flex justify-center items-center">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp
