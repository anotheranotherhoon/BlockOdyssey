import ProductList from "../src/components/ProductList/ProductList"
import Search from "../src/components/Search/Search"
import { GetServerSideProps } from "next"
import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query"
import { fetchSearchProduct } from "../src/api/api"
import styles from "../styles/Home.module.scss"
import Pagination from "../src/components/Pagination/Pagination"
import { RouterInfo } from "../src/utils/RouterInfo"
import { useDispatch } from "react-redux"
import { useEffect } from "react"
import { changeFilter } from "../src/redux/queryReducer"
import Head from "next/head"

const Home = () => {
  const dispatch = useDispatch()
  const { filter, q, limit, page, selectedFilterName, } = RouterInfo()
  useEffect(() => {
    dispatch(changeFilter({
      page,
      limit,
      filter,
      q,
      selectedFilterName
    }))
  }, [filter, q, limit, page, dispatch, selectedFilterName])
  const { data, isLoading } = useQuery(
    ["product", filter, q], () => fetchSearchProduct(filter, q)
  )
  if (isLoading) {
    return (
      <div className={styles.layout}>
        <div className={styles.wrapper}>
        <Head>
        <title>이창훈_FE_원티드</title>
      </Head>
          로딩 중 입니다...
        </div>
      </div>
    )
  }
  return (
    <div className={styles.layout}>
      <div className={styles.wrapper}>
      <Head>
        <title>이창훈_FE_원티드</title>
      </Head>
        <Search />
        <ProductList product={data} />
        <Pagination total={data.length} />
      </div>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  let filter = "all"
  let q = "default"
  context.query.filter ? filter = context.query.filter as string : filter
  context.query.q ? q = context.query.q as string : q
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery(["product", filter, q], () => fetchSearchProduct(filter, q))
  return {
    props: {
      dehydratedState: dehydrate(queryClient)
    }
  }
}

export default Home
