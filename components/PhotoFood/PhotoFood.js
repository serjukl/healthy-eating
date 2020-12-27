import React from 'react'
import styles from './PhotoFood.module.sass'

const PhotoFood = () => (
  <div className={styles.container}>
        <div className={styles.box}>
            <div>
                <p>
                   Тривалий і стабільний ефект
                </p>
            </div>
            <img src="/images/flower.jpg" alt="/" className={styles.image} />
            <li>Сповнює енергією.</li>
            <li>Звичні для організму продукти.</li>
            <li>Безпечно для організму.</li>
        </div>
        <div className={styles.photo}/>
    </div>
)

export default PhotoFood
