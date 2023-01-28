import "../styles/globals.scss"
import type { AppProps } from "next/app"
import { DehydratedState, Hydrate, QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { Provider } from "react-redux"
import {store} from "../src/redux/store"
function MyApp({ Component, pageProps }: AppProps<{ dehydratedState: DehydratedState }>) {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Provider store={store}>
        <Component {...pageProps} />
        </Provider>

      </Hydrate>
    </QueryClientProvider>
  )
}

export default MyApp
