import { axiosInstance } from "./axiosInstance"

export const fetchProduct = async()=> {
  const response = await axiosInstance('/products',{
    params : {
      limit :100,
    }
  })
  const productData = response.data
  return {
    productData
  }
}

export const searchProduct = async(q : string )=> {
  const response = await axiosInstance('/products/search',{
    params : {
      limit :100,
      q
    }
  })
  const productData = response.data.products
  return productData
}

export const filterProduct = async(data : any, filter :  string, q : string ) => {
  //TODO : data 타입
  const result = data.filter((item : any)=> item[filter].includes(q))
  return result
}

export const fetchSearchProduct = async (filter : string , q : string) => {
  if(filter==='default' && q==='default'){
    const result = await fetchProduct()
    return result
  }else if(filter==='default' && q!=='default'){
    const result = await searchProduct(q)
    return result
  }else if(filter !=='default' && q !== 'default'){
    const data = await searchProduct(q)
    const result = filterProduct(data, filter, q)
    return result
  }else if(filter !=='default' && q === 'default'){
    const result = await fetchProduct()
    return result
  }
}