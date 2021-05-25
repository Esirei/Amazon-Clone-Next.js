import { AppProps } from 'next/app';
import 'tailwindcss/tailwind.css';
import { StoreProvider } from '~/store';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StoreProvider>
      <Component {...pageProps} />
    </StoreProvider>
  );
}

export default MyApp;
