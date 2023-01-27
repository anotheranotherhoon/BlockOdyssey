export const convertDollar = (price : number)=> {
  const convertedPrice = `$${price.toLocaleString()}`
  return convertedPrice
}