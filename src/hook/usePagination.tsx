import { RouterInfo } from "../utils/RouterInfo";
import { useSelector } from "react-redux"
import { RootState } from "../redux/store";

export const usePagination = (total : number) => {
  const {router} = RouterInfo()
  const state = useSelector((state : RootState)=>state.queryReducer)
  const {page, limit, filter, q }=state
  const totalPage = Math.ceil(total / limit)
  const handlePreviousPage = () => {
    if(page===1){
      return 
    }
    if(filter===undefined && q===undefined){
      router.push(`/?page=${page-1}&limit=${limit}`)
    }
    else if(filter===undefined && q!==undefined){
      router.push(`/?q=${q}&page=${page-1}&limit=${limit}`)
    }
    else if(filter!==undefined && q===undefined){
      router.push(`/?filter=${filter}&page=${page-1}&limit=${limit}`)
    }
    else if(filter!==undefined && q!==undefined){
      router.push(`/?filter=${filter}&q=${q}&page=${page-1}&limit=${limit}`)
    }
  }
  const handleNextPage = () => {
    if(page===totalPage){
      return 
    }
    if(filter===undefined && q===undefined){
      router.push(`/?page=${page+1}&limit=${limit}`)
    }
    else if(filter===undefined && q!==undefined){
      router.push(`/?q=${q}&page=${page+1}&limit=${limit}`)
    }
    else if(filter!==undefined && q===undefined){
      router.push(`/?filter=${filter}&page=${page+1}&limit=${limit}`)
    }
    else if(filter!==undefined && q!==undefined){
      router.push(`/?filter=${filter}&q=${q}&page=${page+1}&limit=${limit}`)
    }
  }
  const handleClickNumber= (targetPage : number) => {
    console.log(filter, q)
    if(filter===undefined && q===undefined){
      router.push(`/?page=${targetPage}&limit=${limit}`)
    }
    else if(filter===undefined && q!==undefined){
      router.push(`/?q=${q}&page=${targetPage}&limit=${limit}`)
    }
    else if(filter!==undefined && q===undefined){
      router.push(`/?filter=${filter}&page=${targetPage}&limit=${limit}`)
    }
    else if(filter!==undefined && q!==undefined){
      router.push(`/?filter=${filter}&q=${q}&page=${targetPage}&limit=${limit}`)
    }
  }
  return{
    totalPage,
    handlePreviousPage,
    handleNextPage,
    handleClickNumber
  }
}