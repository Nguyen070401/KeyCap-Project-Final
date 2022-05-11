import React from 'react'
import { GiftProducts } from '../data'
import Product from "./Product"
import styles from "./GiftPageProducts.module.css"

const GiftPageProducts = () => {
  return (
    <>
    <div className={styles.Title}>PHỤ KIỆN PRODUCTS</div>
    <div className={styles.Container}>
        {GiftProducts.map((item)=>(
                <Product item={item} key={item.id}/>
        ))}
    </div>
    </>
  )
}

export default GiftPageProducts
