import { useRouter } from "next/router"

export const RouterInfo = () => {
  const router = useRouter()
  const limit = Number(router.query.limit) || 10
  const page = Number(router.query.page) || 1
  let filter = 'all'
  let q = 'default'
  router.query.filter ? filter = router.query.filter as string : filter
  router.query.q ? q = router.query.q as string : q
  return {
    router, filter, q, limit, page
  }
}