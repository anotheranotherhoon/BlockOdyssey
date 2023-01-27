import { useRouter } from "next/router"

export const RouterInfo = () => {
  const router = useRouter()
  let filter = 'all'
  let q = 'default'
  router.query.filter ? filter = router.query.filter as string : filter
  router.query.q ? q = router.query.q as string : q
  return {
    filter, q
  }
}