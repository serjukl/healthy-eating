import React from 'react'
import styles from './InpData.module.sass'

const InpData = (props) => (
  <div className={styles.box}>
    <input type="text" placeholder={props.text} className={styles.inp} name={props.name}/>
  </div>
)

export default InpData
