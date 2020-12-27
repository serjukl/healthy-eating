import React from 'react'
import styles from './Title.module.sass'

const Title = (props) => (
  <div className={styles.box}>
    <h1>
      {props.text}
    </h1>
  </div>
)

export default Title
