import React from 'react'
import styles from '../styles/recipes.module.sass'

const recipe1600 = () => {
    return (
        <div className={styles.giveResipe}>
          <p>Увага збережіть даний файл, адже він доступний у єдиному екземплярі</p>
          <a href="/1500.pdf" download>Завантажити</a>
          <p>
            Подарунковий гайд 'Гормони щастя'
          </p>
          <a href="/TXT.rtf" download>Завантажити</a>
        </div>
      )
}

export default recipe1600
