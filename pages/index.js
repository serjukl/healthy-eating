import React, { useState } from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.sass'
import Faq from '../components/FAQ/FAQ'
import FlowerTitleSection from '../components/FlowerTitleSection/FlowerTitleSection'
// eslint-disable-next-line import/extensions
import Title from '../components/Title/Title'
import InpData from "../components/InpData/InpData"
import BoxData from "../components/BoxData/BoxData";
import PhotoFood from "../components/PhotoFood/PhotoFood"
import Table from "../components/Table/Table";

const Home = () => {
  const [questionIsOpen, questionIsOpenHandler] = useState(null)
  const FAQestions = [
    {
      id: '0',
      question: 'Раціон підійде будь-кому?',
      answer: 'Збалансоване раціональне харчування полягає у підтриманні необхідної кількості мікроелементів і вітамінів, які організм не може синтезувати, тому вони повинні надходити разом з їжею. Таке харчування іноді прирівнюють до дієт, однак не всяке збалансоване меню сприяє схудненню.'
    },
    {
      id: '1',
      question: 'Раціон підійде будь-кому? 2',
      answer: '2 Збалансоване раціональне харчування полягає у підтриманні необхідної кількості мікроелементів і вітамінів, які організм не може синтезувати, тому вони повинні надходити разом з їжею. Таке харчування іноді прирівнюють до дієт, однак не всяке збалансоване меню сприяє схудненню.'
    }
  ]
  const innerTitles = [
    'СХУДНУТИ БЕЗ ДІЄТ ТА ВЕЛИКИХ ЗУСИЛЬ',
    'НЕ ПОТРІБНО ВІДМОВЛЯТИСЬ ВІД УЛЮБЛЕНОЇ ЇЖІ',
    'СМАЧНО ТА ЗБАЛАНСОВАНО ХАРЧУВАТИСЬ',
    'ПОДІЛИСЬ ІЗ БЛИЗЬКИМИ, АДЖЕ РАЦІОН ПІДІЙДЕ УСІЙ СІМ’Ї'
  ]
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
              isOpen={key.toString() === questionIsOpen ? questionIsOpen : null}
              openHandler={(id) => questionIsOpenHandler(id)}
            />
          ))
        }
        <div className={styles.titleContainer}>
          {
            innerTitles.map((title, key) => <FlowerTitleSection title={title} key={key} />)
          }
        </div>
        <Title text='ВАШІ РЕЗУЛЬТАТИ' />
        <Title text='ВІДПОВІДІ НА МОЖЛИВІ ПИТАННЯ' />
        <Title text='Оберіть раціон який підходить саме Вам' />
        <BoxData />
        <PhotoFood />
        <Table
          index='24,5'
          weight='45'
          weightX='45'
          calories='367'
        />
      </div>
    </div>
  )
}

export default Home
