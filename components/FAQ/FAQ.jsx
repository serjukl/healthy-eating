import React from 'react'
import styles from './FAQ.module.sass'

const Faq = ({ item, openHandler, isOpen }) => (
  <div className={styles.container}>
    <div
      className={isOpen ? `${styles.questionContainer} ${styles.questionContainerActive}` : styles.questionContainer}
      onClick={() => openHandler(isOpen === item.id ? null : item.id)}
    >
      <p>
        {
          item.question
        }
      </p>
      <div
        className={styles.openAnswer}
      >
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 12L20 22L30 12L34 14L20 28L6 14L10 12Z" fill="#545454" />
        </svg>
      </div>
    </div>
    <div className={styles.answerContainer} style={{ display: isOpen ? 'flex' : 'none' }}>
      <p>
        {
            item.answer
        }
      </p>
    </div>
  </div>
)

export default Faq
