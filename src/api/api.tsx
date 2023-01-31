import { axiosInstance } from "./axiosInstance"
import type { ProductType } from "../types/interfaces"

export const fetchProduct = async()=> {
  const response = await axiosInstance("/products",{
    params : {
      limit :100,
    }
  })
  const productData = response.data.products
  return productData
}

export const searchProduct = async(q : string | null )=> {
  const response = await axiosInstance("/products/search",{
    params : {
      limit :100,
      q
    }
  })
  const productData = response.data.products
  return productData
}

export const filterProduct = async(data : ProductType[], filter :  string, q : string) => {
  const keyword = q.toLowerCase()
  const result = data.filter((item : ProductType)=> (item[filter] as string).toLowerCase().includes(keyword))
  return result
}

export const fetchSearchProduct = async (filter : string | undefined | null , q : string | undefined | null) => {
  if(filter===undefined && q===undefined){
    const result = await fetchProduct()
    return result
  }else if(filter===undefined && q!==undefined){
    const result = await searchProduct(q)
    return result
  }else if(filter !==undefined && q !== undefined){
    const data = await fetchProduct()
    const result = filterProduct(data, filter as string, q as string)
    return result
  }else if(filter !==undefined && q === undefined){
    const result = await fetchProduct()
    return result
  }
}