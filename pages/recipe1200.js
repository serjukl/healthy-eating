import React, { useEffect, useState } from 'react'
import styles from '../styles/recipes.module.sass'

const recipe1200 = () => {
  const [userChoose, userChooseHandler] = useState(null)
  useEffect(() => {
    userChooseHandler(localStorage.getItem('recipe'))
  }, [])

  const finish = () => {
    localStorage.setItem('recipe', null)
    window.location = '/'
  }
  return (
    <div className={styles.giveResipe}>

      {
        +userChoose
          ? (
            <>
              <p>Увага збережіть даний файл, адже він доступний у єдиному екземплярі</p>
              <a href={`/${localStorage.getItem('recipe')}.pdf`} download>Завантажити</a>
              <p>
                Подарунковий гайд “Гормони щастя”
              </p>
              <a href="/present.pdf" download>Завантажити</a>
              <button type="button" onClick={() => finish()}>Я завантажив всі файли, завершити</button>
            </>
          )
          : <p><a href="/">Повернутись на основну сторінку</a></p>
      }

    </div>
  )
}

export default recipe1200
