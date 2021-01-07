import React from 'react'
import styles from './CheckBox.module.css'

const CheckBox = ({ isCheck, data, changeHandler, name }) => (
  <label className={styles.container}>
    {data}
    <input name={name} type="checkbox" checked={isCheck} onChange={(e) => changeHandler(e)} />
    <span className={styles.checkmark} />
  </label>
)

export default CheckBox
