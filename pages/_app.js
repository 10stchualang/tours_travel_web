import { Provider } from 'next-auth/client'
import 'antd/dist/antd.css';
import { StoreProvider } from 'easy-peasy'
import store from 'store'

export default function App({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <StoreProvider store={store}>
        <Component {...pageProps} />
      </StoreProvider>
    </Provider>

  )
}