import React from 'react'
import styles from './Title.module.sass'

const Title = ({isColor, text}) => (
  <div className={styles.box} style={{ backgroundColor: isColor ? 'rgba(236, 160, 72, .7)' : null }}>
    <h1>
      {text}
    </h1>
  </div>
)

export default Title
