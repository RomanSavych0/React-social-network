import preloader from "../../../asserts/images/preloader.svg";
import React from "react";
import styles from './preloader.module.css'
let Preloader =(props)=>{
return<div className={styles.imageWrapper}>
    <img src={preloader}/>
</div>

};
export default Preloader;
