import { RouterInfo } from "../utils/RouterInfo";

export const usePagination = (total : number) => {
  const {router, filter, q,  limit, page} = RouterInfo()
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