import "../styles/globals.scss"
import type { AppProps } from "next/app"
import { DehydratedState, Hydrate, QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { Provider } from "react-redux"
import {store} from "../src/redux/store"
import Head from "next/head"
function MyApp({ Component, pageProps }: AppProps<{ dehydratedState: DehydratedState }>) {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Provider store={store}>
          <Head>
          <title>이창훈_FE_원티드</title>
          </Head>
        <Component {...pageProps} />
        </Provider>

      </Hydrate>
    </QueryClientProvider>
  )
}

export default MyApp
