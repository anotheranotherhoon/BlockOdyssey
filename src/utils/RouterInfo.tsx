import { useRouter } from "next/router"

export const RouterInfo = () => {
  const router = useRouter()
  const limit = Number(router.query.limit) || 10
  const page = Number(router.query.page) || 1
  let filter = undefined
  let q = undefined
  router.query.filter===undefined ? filter : filter = router.query.filter as string 
  router.query.q===undefined ? q :  q = router.query.q as string 
  let selectedFilterName = undefined
  switch(filter){
    case undefined :
      selectedFilterName="전체"
      break;
    case "title" :
      selectedFilterName = "상품명"
      break
    case "brand" :
      selectedFilterName = "브랜드"
      break
    case "description" : 
    selectedFilterName="상품내용"
    break
    default : 
    selectedFilterName = "전체"
  }
  return {
    router, filter, q, limit, page, selectedFilterName
  }
}