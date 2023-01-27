export const convertDollar = (price : string)=> {
  const convertedPrice = `$${price.toLocaleString()}`
  return convertedPrice
}