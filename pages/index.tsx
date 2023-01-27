import ProductList from "../src/components/ProductList/ProductList"
import Search from "../src/components/Search/Search"
import { GetServerSideProps } from "next"
import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query"
import { fetchSearchProduct } from "../src/api/api"
import styles from '../styles/Home.module.scss'
import Pagination from "../src/components/Pagination/Pagination"
import { RouterInfo } from "../src/utils/RouterInfo"
import { useDropDown } from "../src/hook/useDropDown"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../src/redux/store"
import { useEffect } from "react"
import { changeFilter } from "../src/redux/queryReducer"

const Home = () => {
  const state = useSelector((state: RootState) => state.queryReducer)
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
  const { data, isLoading, isError } = useQuery(
    ['product', filter, q], () => fetchSearchProduct(filter, q)
  )
  const { 
    isDropDownShow: isFilterDropDownShow, 
    selectedName: filterSelectedName, 
    selectedStatus: filterSelectedStatus, 
    handleDropDown: filterHandleDropDown, 
    handleCurrentIndex: filterHandleCurrentIndex } = useDropDown(selectedFilterName, filter)
  const { 
    isDropDownShow: isLimitDropDownShow, 
    selectedName: limitSelectedName, 
    selectedStatus: limitSelectedStatus, 
    handleDropDown: limitHandleDropDown, 
    handleCurrentIndex: limitHandleCurrentIndex } = useDropDown(String(limit), String(limit))
  if (isLoading === true) {
    return <div>hello</div>
  }

  return (
    <div className={styles.layout}>
      <div className={styles.wrapper}>
        <Search isDropDownShow={isFilterDropDownShow} selectedName={filterSelectedName} selectedStatus={filterSelectedStatus} handleDropDown={filterHandleDropDown} handleCurrentIndex={filterHandleCurrentIndex} limitSelectedStatus={limitSelectedStatus} />
        <ProductList product={data} />
        <Pagination total={data.length} isDropDownShow={isLimitDropDownShow} selectedName={limitSelectedName} selectedStatus={limitSelectedStatus} handleDropDown={limitHandleDropDown} handleCurrentIndex={limitHandleCurrentIndex} />
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
