import React from 'react'
import styles from './Table.module.sass'

const Table = (props) => (
  <div className={styles.container}>
    <div className={styles.leftBox}>
      <div className={styles.heading}>
        <p>
          Найменування характеристики
        </p>
      </div>
      <div>
        <p>
          Індекс маси тіла
        </p>
      </div>
      <div>
        <p>
          Ідеальна вага
        </p>
      </div>
      <div>
        <p>
          Ідеальна вага з поправкою на тип фігури
        </p>
      </div>
      <div>
        <p>
          Базова необхідність в калоріях
        </p>
      </div>
    </div>
    <div className={styles.rightBox}>
      <div className={styles.headingRight}>
        <p>
          Значення
        </p>
      </div>
      <div>
        <p>
            {props.index}
        </p>
      </div>
      <div>
        <p>
            {props.weight}
        </p>
      </div>
      <div>
        <p>
            {props.weightX}
        </p>
      </div>
      <div>
        <p>
            {props.calories}
        </p>
      </div>
    </div>
  </div>
)

export default Table
