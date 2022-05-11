import React from 'react'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import { Add, Remove } from "@material-ui/icons";
import styles from "./Product.module.css"
const Product = () => {
  return (
    <div className={styles.Container}>
      <Navbar/>
      <Announcement/>

      <div className={styles.WrapperContainer}>
      <div className={styles.Wrapper}>
          <div className={styles.ImgContainer}>
            <img className={styles.Image} alt="" src="https://massdrop-s3.imgix.net/product-images/massdrop-x-matt3o-devtty-custom-keycap-set/FP/eAhGOHZDSDKi4fejZIO3_EZdLLKCfQiWZIZu1qxGB_pc.png?auto=format&fm=jpg&fit=fill&w=820&h=547&bg=f0f0f0&dpr=1&chromasub=444&q=70"></img>
          </div>
          <div className={styles.InfoContainer}>
              <h1 className={styles.Title}>Vine Ring</h1>
              <div className={styles.Detail}>Mô tả chi tiết:</div>
                <p className={styles.Desc}>Nspired by nature, Tiffany Victoria captures the beauty of flowers and vines with a mix of expertly cut diamonds. This ring features a round tanzanite at its center and an organic vine motif of marquise diamonds. Creating color, light and movement, Tiffany Victoria designs are proof that more diamonds are always better.</p>
              <span className={styles.Price}>$15.000</span>

          <div className={styles.AddContainer}>
            <div className={styles.AmountContainer}>
              <Remove />
              <span className={styles.Amount}>1</span>
              <Add />
            </div>
            <button className={styles.Button}>THÊM VÀO GIỎ HÀNG</button>
          </div>
          </div>

      </div>
      
    </div>
    <Newsletter/>
    <Footer/>
    </div>
  )
}

export default Product
