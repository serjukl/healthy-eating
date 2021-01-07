import React from 'react'
import styles from './InpData.module.css'

const InpData = (props) => (
  <div className={styles.box}>
    <input type="text" onChange={(e) => props.onChangeHandler(e)}  placeholder={props.text} className={styles.inp} name={props.name}/>
  </div>
)

export default InpData
