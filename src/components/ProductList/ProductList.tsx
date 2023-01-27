import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { fetchSearchProduct } from '../../api/api'
import { INDEX } from '../../utils/constantValue'
import { convertDollar } from '../../utils/ConvertFn'
import { RouterInfo } from '../../utils/RouterInfo'
import styles from './ProductList.module.scss'

const ProductList = () => {
  const { filter, q } = RouterInfo()
  const { data, isLoading, isError } = useQuery(
    ['product', filter, q], () => fetchSearchProduct(filter, q)
  )
  if (isLoading === true) {
    return <div>hello</div>
  }
  console.log(data)
  return (
    <React.Fragment>
      <div>검색된 데이터 : {data.length}</div>
      <div className={styles.productListBox}>
        <section>
          <div className={styles.small}>상품번호</div>
          <div>상품명</div>
          <div>브랜드</div>
          <div>상품내용</div>
          <div className={styles.small}>가격</div>
          <div className={styles.small}>평점</div>
          <div className={styles.small}>재고</div>
        </section>
        {
          data.map((product: any) => (
            <section key={product.id}>
              <div className={styles.small}>{product.id}</div>
              <div>{product.title}</div>
              <div>{product.brand}</div>
              <div>{
                product.description.length>40 ?`${product.description.slice(0,41)}...` : product.description
                }</div>
              <div className={styles.small}>{convertDollar(product.price)}</div>
              <div className={styles.small}>{product.rating}</div>
              <div className={styles.small}>{product.stock}</div>
            </section>

          ))}
      </div>
    </React.Fragment>

  )
}

export default ProductList