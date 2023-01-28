import { RouterInfo } from "../utils/RouterInfo";
import { useSelector } from "react-redux"
import { RootState } from "../redux/store";

export const usePagination = (total : number) => {
  const {router} = RouterInfo()
  const state = useSelector((state : RootState)=>state.queryReducer)
  const {page, limit, filter, q }=state
  const numPages = Math.ceil(total / limit)
  const handlePreviousPage = () => {
    if(page===1){
      return 
    }
    router.push(`/?filter=${filter}&q=${q}&page=${page-1}&limit=${limit}`)
  }
  const handleNextPage = () => {
    if(page===numPages){
      return 
    }
    router.push(`/?filter=${filter}&q=${q}&page=${page+1}&limit=${limit}`)
  }
  const handleClickNumber= (targetPage : number) => {
    router.push(`/?filter=${filter}&q=${q}&page=${targetPage}&limit=${limit}`)
  }
  return{
    numPages,
    handlePreviousPage,
    handleNextPage,
    handleClickNumber
  }
}