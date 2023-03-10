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
import  Loading from "../src/components/Suspense/Loading"

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
    return
  }
  return (
      <div className={styles.layout}>
        <div className={styles.wrapper}>
          {isLoading ? 
          <Loading/>
          : 
          <React.Fragment>
          <Search />
          <ProductList product={data} />
          <Pagination total={data.length} />
          </React.Fragment>}
        </div>
      </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  let filter : string | null | undefined = null
  let q : string | null | undefined= null
  context.query.filter===undefined ? filter : filter = context.query.filter as string 
  context.query.q===undefined ? q :  q = context.query.q as string 
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
