import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.sass'
import Faq from '../components/FAQ/FAQ'

const Home = () => {
  const [questionIsOpen, questionIsOpenHandler] = useState(null)
  const FAQestions = [
    {
      id: 0,
      question: 'Раціон підійде будь-кому?',
      answer: 'Збалансоване раціональне харчування полягає у підтриманні необхідної кількості мікроелементів і вітамінів, які організм не може синтезувати, тому вони повинні надходити разом з їжею. Таке харчування іноді прирівнюють до дієт, однак не всяке збалансоване меню сприяє схудненню.'
    },
    {
      id: 1,
      question: 'Раціон підійде будь-кому? 2',
      answer: '2 Збалансоване раціональне харчування полягає у підтриманні необхідної кількості мікроелементів і вітамінів, які організм не може синтезувати, тому вони повинні надходити разом з їжею. Таке харчування іноді прирівнюють до дієт, однак не всяке збалансоване меню сприяє схудненню.'
    }
  ]
  useEffect(() => {
    console.log(questionIsOpen)
  }, [questionIsOpen])
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.FAQContainer}>
        {
          FAQestions.map((item, key) => (
            <Faq
              item={item}
              key={key}
              isOpen={key === questionIsOpen ? questionIsOpen.toString() : null}
              openHandler={(id) => questionIsOpenHandler(id)}
            />
          ))
        }
      </div>
    </div>
  )
}

export default Home
