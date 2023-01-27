import ProductList from "../src/components/ProductList/ProductList"
import Search from "../src/components/Search/Search"
import { GetServerSideProps } from "next"
import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query"
import { fetchSearchProduct } from "../src/api/api"
import styles from '../styles/Home.module.scss'
import Pagination from "../src/components/Pagination/Pagination"
import { RouterInfo } from "../src/utils/RouterInfo"

const Home = () => {
  const {filter, q} = RouterInfo()
  const { data, isLoading, isError } = useQuery(
    ['product', filter, q], () => fetchSearchProduct(filter, q)
  )
  if (isLoading === true) {
    return <div>hello</div>
  }
  return (
    <div className={styles.layout}>
      <div className={styles.wrapper}>
        <Search />
        <ProductList product={data} />
        <Pagination total={data.length}/>
      </div>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  let filter = 'all'
  let q = 'default'
  context.query.filter ? filter = context.query.filter as string : filter 
  context.query.q ? q = context.query.q as string : q 
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery(['product', filter, q], () => fetchSearchProduct(filter, q))
  return {
    props: {
      dehydratedState: dehydrate(queryClient)
    }
  }
}

export default Home
