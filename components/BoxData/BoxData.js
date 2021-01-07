import React, { useEffect, useState } from 'react'
import styles from './BoxData.module.css'
import InpData from '../InpData/InpData'
import CheckBox from '../CheckBox/CheckBox'

const BoxData = ({ getResultHandler }) => {
  const checkBoxesData = [
    'Мінімум або відсутність фізичних навантажень',
    'Спорт тричі на тиждень',
    'Спорт 5 разів на тиждень',
    'Інтенсивний спорт 5 разів на тиждень',
    'Спорт кожного дня',
    'Інтенсивний спорт кожного дня або двічі на день',
    'Спорт кожного дня та фізична робота'
  ]
  const [checked, checkedHandler] = useState(null)
  const [inputVal] = useState({})

  const checkBoxHandler = (value) => {
    if (value.target.name === checked) {
      checkedHandler(null)
    } else {
      checkedHandler(value.target.name)
    }
  }

  const getInputsValues = (e) => {
    inputVal[e.target.name] = e.target.value
    console.log(inputVal)
  }

  const idealWeightHandler = () => {
    if ((inputVal.height) < 165) {
      return (inputVal.height) - 100
    }
    if ((inputVal.height) > 175) {
      return (inputVal.height) - 110
    }
    if ((inputVal.height) < 175 && (inputVal.height) > 165) {
      return (inputVal.height) - 105
    }
  }

  const caloriesWithSportHandler = () => {
    const cal = Math.round(447.6 + (9.2 * inputVal.weight) + (3.1 * inputVal.height) - (4.3 * inputVal.age))
    switch (checked) {
      case checkBoxesData[0]:
        return { value: Math.round(cal * 1.2), name: checked }
      case checkBoxesData[1]:
        return { value: Math.round(cal * 1.375), name: checked }
      case checkBoxesData[2]:
        return { value: Math.round(cal * 1.4625), name: checked }
      case checkBoxesData[3]:
        return { value: Math.round(cal * 1.55), name: checked }
      case checkBoxesData[4]:
        return { value: Math.round(cal * 1.6375), name: checked }
      case checkBoxesData[5]:
        return { value: Math.round(cal * 1.725), name: checked }
      case checkBoxesData[6]:
        return { value: Math.round(cal * 1.9), name: checked }
      default:
        return false
    }
  }

  const calcMyValues = () => {
    if(!inputVal.weight) {
      alert('Вкажіть вашу вагу')
      return false
    }
    if(!inputVal.height) {
      alert('Вкажіть ваш ріст')
      return false
    }
    if(!inputVal.age) {
      alert('Вкажіть ваш вік')
      return false
    }
    if(!checked) {
      alert('Вкажіть вашу фізичну активність')
      return false
    }
    getResultHandler({
      IMT: Math.round(inputVal.weight / ((inputVal.height / 100) * (inputVal.height / 100))),
      idealWeight: idealWeightHandler(),
      calories: Math.round(447.6 + (9.2 * inputVal.weight) + (3.1 * inputVal.height) - (4.3 * inputVal.age)),
      caloriesWithSport: caloriesWithSportHandler()
    })
    window.location = '#result'
  }

  useEffect(() => {
    console.log('here')
  }, [])

  return (
    <div>
      <div className={styles.box}>
        <div className={styles.inpBox}>
          <h2>
            ВАШІ ДАНІ
          </h2>
          <form>
            <InpData onChangeHandler={(e) => getInputsValues(e)} text="Ваша вага (кг)" name="weight" />
            <InpData onChangeHandler={(e) => getInputsValues(e)} text="Ваш ріст (см)" name="height" />
            <InpData onChangeHandler={(e) => getInputsValues(e)} text="Ваш вік" name="age" />
          </form>
        </div>
        <div className={styles.checkBox}>
          <h2>
            ФІЗИЧНА АКТИВНІСТЬ
          </h2>
          <form className={styles.containerForm}>
            {
              checkBoxesData.map((checkBoxName, key) => (
                <CheckBox
                  changeHandler={(value) => checkBoxHandler(value)}
                  data={checkBoxName}
                  key={key}
                  isCheck={checked === checkBoxName ? checked : false}
                  name={checkBoxName}
                />
              ))
            }
          </form>
        </div>
      </div>
      <div className={styles.btnContainer}>
        <button type="button" onClick={() => calcMyValues()} className={styles.submitButton}>
          ПОКАЗАТИ РЕЗУЛЬТАТИ ТА ОБРАТИ РАЦІОН
        </button>
      </div>
    </div>
  )
}

export default BoxData
