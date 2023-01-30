import ProductList from "../src/components/ProductList/ProductList"
import Search from "../src/components/Search/Search"
import { GetServerSideProps } from "next"
import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query"
import { fetchSearchProduct } from "../src/api/api"
import styles from "../styles/Home.module.scss"
import Pagination from "../src/components/Pagination/Pagination"
import { RouterInfo } from "../src/utils/RouterInfo"
import { useDispatch } from "react-redux"
import React, {useEffect } from "react"
import { changeFilter } from "../src/redux/queryReducer"
import Loading from "../src/components/Suspense/Loading"

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
    ["product", filter, q], () => fetchSearchProduct(filter, q), {
    staleTime: Infinity
  }
  )
  if(isLoading){
    return (
    <Loading/> 
    )
  }
  return (
    <div className={styles.layout}>
    <div className={styles.wrapper}>
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
  await queryClient.prefetchQuery(["product", filter, q], () => fetchSearchProduct(filter, q), {
    staleTime: Infinity
  })
  return {
    props: {
      dehydratedState: dehydrate(queryClient)
    }
  }
}

export default Home
