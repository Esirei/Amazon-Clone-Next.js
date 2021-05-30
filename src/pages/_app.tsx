import { AppProps } from 'next/app';
import 'tailwindcss/tailwind.css';
import { StoreProvider } from '~/store';
import { Provider as AuthProvider } from 'next-auth/client';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <StoreProvider>
        <Component {...pageProps} />
      </StoreProvider>
    </AuthProvider>
  );
}

export default MyApp;
