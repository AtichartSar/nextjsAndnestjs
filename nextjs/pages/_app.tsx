import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import 'antd/dist/reset.css';
import AppLayout from '@/components/AppLayout';
import { Provider } from 'react-redux';
import { store } from '@/store/store';
export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </Provider>
  );
}
