import { axiosInstance } from "./axiosInstance"
import type { ProductType } from "../types/interfaces"

export const fetchProduct = async()=> {
  const response = await axiosInstance('/products',{
    params : {
      limit :100,
    }
  })
  const productData = response.data.products
  return productData
}

export const searchProduct = async(q : string )=> {
  const response = await axiosInstance('/products/search',{
    params : {
      limit :100,
      q
    }
  })
  console.log(response)
  const productData = response.data.products
  return productData
}

export const filterProduct = async(data : ProductType[], filter :  string, q : string ) => {
  const keyword = q.toLocaleLowerCase()
  const result = data.filter((item : ProductType)=> (item[filter] as string).toLowerCase().includes(keyword))
  return result
}

export const fetchSearchProduct = async (filter : string , q : string) => {
  if(filter==='all' && q==='default'){
    const result = await fetchProduct()
    return result
  }else if(filter==='all' && q!=='default'){
    const result = await searchProduct(q)
    return result
  }else if(filter !=='all' && q !== 'default'){
    const data = await fetchProduct()
    const result = filterProduct(data, filter, q)
    return result
  }else if(filter !=='all' && q === 'default'){
    const result = await fetchProduct()
    return result
  }
}