import React from 'react'
import styles from './PhotoFood.module.css'

const PhotoFood = () => (
  <div className={styles.container}>
    <div className={styles.box}>
      <div className={styles.titleBox}>
        <p>
          Тривалий і стабільний ефект
        </p>
      </div>
      <div className={styles.leftPart}>
        <img src="/images/flower.jpg" alt="/" className={styles.image} />
        <ul>
          <li>Сповнює енергією</li>
          <li>Звичні для організму продукти</li>
          <li>Безпечно для організму</li>
        </ul>
      </div>
    </div>
    <div className={styles.photo} />
  </div>
)

export default PhotoFood
