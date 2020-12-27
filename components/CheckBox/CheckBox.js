import React from 'react'
import styles from './CheckBox.module.sass'

const CheckBox = (props) => (
    <label className={styles.container}> {props.data}
        <input type="checkbox" checked="checked" />
        <span className={styles.checkmark}></span>
    </label>
)

export default CheckBox
