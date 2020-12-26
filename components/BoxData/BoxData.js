import React from 'react'
import styles from './BoxData.module.sass'
import InpData from '../InpData/InpData'
import CheckBox from '../CheckBox/CheckBox'

const BoxData = () => (
  <div className={styles.box}>
    <div className={styles.inpBox}>
      <h2>
        ВАШІ ДАНІ
      </h2>
      <form>
        <InpData text="Ваша вага (кг)" name="weight" />
        <InpData text="Ваш ріст (см)" name="hfjfjf" />
        <InpData text="Ваш вік" name="hfjfjf" />
        <InpData text="Об’єм зап’ястя (см)" name="hfjfjf" />
      </form>
    </div>
    <div className={styles.checkBox}>
      <h2>
        ФІЗИЧНА АКТИВНІСТЬ
      </h2>
      <form className={styles.containerForm}>
        <CheckBox data="Мінімум або відсутність фізичних навантажень" />
        <CheckBox data="Спорт тричі на тиждень" />
        <CheckBox data="Спорт 5 разів на тиждень" />
        <CheckBox data="Інтенсивний спорт 5 разів на тиждень" />
        <CheckBox data="Спорт кожного дня" />
        <CheckBox data="Інтенсивний спорт кожного дня або двічі на день" />
        <CheckBox data="Спорт кожного дня та фізична робота" />
      </form>
    </div>
  </div>
)

export default BoxData
