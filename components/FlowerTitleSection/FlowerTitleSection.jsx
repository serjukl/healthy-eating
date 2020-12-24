import React from 'react'
import styles from './FlowerTitleSection.module.sass'

const FlowerTitleSection = ({ title }) => (
  <div className={styles.container}>
    <img src="/images/flower.jpg" alt="" />
    <p>
      {
        title
      }
    </p>
  </div>
)

export default FlowerTitleSection
