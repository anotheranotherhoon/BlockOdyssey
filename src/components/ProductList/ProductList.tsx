import React from "react"
import { convertDollar } from "../../utils/convertFn"
import { RouterInfo } from "../../utils/RouterInfo"
import styles from "./ProductList.module.scss"
import type { ProductProps, ProductType } from "../../types/interfaces"

const ProductList = ({product} : ProductProps) => {
  const {limit, page} = RouterInfo()
  const offset = (page - 1) * limit
  return (
    <div>
      <div className={styles.length}>검색된 데이터 : {product.length}</div>
      <div className={styles.product_list_wrapper}>
        <section className={styles.bold}>
          <div className={styles.small}>상품번호</div>
          <div>상품명</div>
          <div>브랜드</div>
          <div>상품내용</div>
          <div className={styles.price}>가격</div>
          <div className={styles.small}>평점</div>
          <div className={styles.small}>재고</div>
        </section>
        {
          product.slice(offset, offset+limit).map((product: ProductType) => (
            <section key={product.id}>
              <div className={styles.small}>{product.id}</div>
              <div>{product.title}</div>
              <div>{product.brand}</div>
              <div>{
                product.description.length>40 ?`${product.description.slice(0,41)}...` : product.description
                }</div>
              <div className={styles.price}>{convertDollar(product.price)}</div>
              <div className={styles.small}>{product.rating}</div>
              <div className={styles.small}>{product.stock}</div>
            </section>
          ))}
      </div>
    </div>

  )
}

export default ProductList