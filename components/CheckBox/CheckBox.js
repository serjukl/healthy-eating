import React from 'react'
import styles from './CheckBox.module.sass'

const CheckBox = ({isCheck, data}) => (
    <label className={styles.container}> {data}
        <input type="checkbox" checked={isCheck} />
        <span className={styles.checkmark}></span>
    </label>
)

export default CheckBox
