/* eslint-disable consistent-return */
import React, { useState } from 'react'
import Head from 'next/head'
import { LiqPayPay } from 'react-liqpay'
import styles from '../styles/Home.module.css'
import Faq from '../components/FAQ/FAQ'
import FlowerTitleSection from '../components/FlowerTitleSection/FlowerTitleSection'
import Title from '../components/Title/Title'
import BoxData from '../components/BoxData/BoxData'
import PhotoFood from '../components/PhotoFood/PhotoFood'
import Table from '../components/Table/Table'

const Home = () => {
  const [questionIsOpen, questionIsOpenHandler] = useState(null)
  const [navIsOpen, navIsOpenHandler] = useState(false)
  const [getResult, getResultHandler] = useState(null)
  const [getMenu, getMenuHandler] = useState(null)
  const [typeMenu, typeMenuHandler] = useState(null)
  const [choosedMenu, choosedMenuHandler] = useState(null)

  const FAQestions = [
    {
      id: '0',
      question: 'Раціон підійде будь-кому?',
      answer: 'Збалансоване раціональне харчування полягає у підтриманні необхідної кількості мікроелементів і вітамінів, які організм не може синтезувати, тому вони повинні надходити разом з їжею. Таке харчування іноді прирівнюють до дієт, однак не всяке збалансоване меню сприяє схудненню.'
    },
    {
      id: '1',
      question: 'Як позбавитися жиру на животі ???',
      answer: 'Жир не можливо спалювати в окремих частинах тіла, а лише комплексно. Тому, правильне і збалансоване харчування, з урахуванням потрібної вам калорійності, в поєднанні з систематичним фізичним навантаженням у вигляді кардіо та силових тренувань, є найкращим способом досягти бажаної форми, в тому числі і на животі.'
    },
    {
      id: '2',
      question: 'Яка дієта забезпечує найшвидше схуднення ???',
      answer: 'Є багато дієт які дають швидкий але не стійкий результат і , в основному, є великим стресом для організму. Короткострокові дієти призводять до різкої втрати ваги і в подальшому її відновленню і навіть дають зворотній ефект в небажану сторону. Тільки стабільне збалансоване і здорове харчування з врахуванням потрібної вам калорійність дасть бажаний довгостроковий і стабільний ефект не шкідливий для вашого здоров’я.'
    }
  ]
  const innerTitles = [
    'СХУДНУТИ БЕЗ ДІЄТ ТА ВЕЛИКИХ ЗУСИЛЬ',
    'НЕ ПОТРІБНО ВІДМОВЛЯТИСЬ ВІД УЛЮБЛЕНОЇ ЇЖІ',
    'СМАЧНО ТА ЗБАЛАНСОВАНО ХАРЧУВАТИСЬ',
    'ПОДІЛИТИСЬ ІЗ БЛИЗЬКИМИ, АДЖЕ РАЦІОН ПІДІЙДЕ ДЛЯ ВСІЄЇ СІМ’Ї'
  ]
  const checkPercent = (calories) => {
    if (calories > 1650) return calories
    if (calories > 1550 && calories < 1650) {
      return 1600
    }
    if (calories > 1450 && calories < 1550) {
      return 1500
    }
    if (calories > 1350 && calories < 1450) {
      return 1400
    }
    if (calories > 1250 && calories < 1350) {
      return 1300
    }
    if (calories > 1150 && calories < 1250) {
      return 1200
    }
  }
  const getTypeMenu = (arr) => {
    getMenuHandler(arr)
    const caloriesTemp = getResult.caloriesWithSport.value
    const calories = (caloriesTemp - ((caloriesTemp / 100) * 20))
    const result = checkPercent(caloriesTemp)
    if (arr === 1) {
      typeMenuHandler(checkPercent(calories)) // хочу схуднути
    }
    if (arr === 0) {
      typeMenuHandler(result) // підтримати вагу
    }
  }

  return (
    <div>
      <Head>
        <title>IRYNA SHEREMETA</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <div className={styles.leftPart}>
          <div className={styles.logoContainer}>
            <img src="./images/logo.jpg" alt="" />
            <h1>IRYNA SHEREMETA</h1>
          </div>
          <h1 className={styles.mainPhrase}>
            Хочете позбутися зайвої ваги і покращити здоров’я?
          </h1>
          <p>
            Отримайте хороший результат завдяки
            збалансованому плану харчування.
          </p>
          <a href="#nextScreen" className={styles.nextScreenContainer}>
            Дізнатись більше
            <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.38336 15.4054C8.45217 15.5051 8.54423 15.5866 8.65163 15.6429C8.75903 15.6993 8.87853 15.7287 8.99986 15.7287C9.12119 15.7287 9.2407 15.6993 9.34809 15.6429C9.45549 15.5866 9.54756 15.5051 9.61636 15.4054L16.3664 5.67652C16.4445 5.5643 16.4903 5.43287 16.4988 5.2965C16.5074 5.16013 16.4783 5.02403 16.4147 4.90299C16.3512 4.78196 16.2556 4.68062 16.1384 4.60998C16.0212 4.53934 15.8868 4.50211 15.7499 4.50232H2.24986C2.11324 4.50288 1.97936 4.5406 1.86262 4.61141C1.74588 4.68221 1.65069 4.78344 1.58729 4.90419C1.52389 5.02495 1.49467 5.16066 1.50279 5.29674C1.51091 5.43282 1.55605 5.56412 1.63336 5.67652L8.38336 15.4054Z" fill="#545454" />
            </svg>
          </a>
        </div>
        <div className={styles.rightPart}>
          <div className={styles.imageContainer} />
          <nav className={navIsOpen ? `${styles.menu} ${styles.menuActive}` : styles.menu}>
            <ul>
              <li>
                <a onClick={() => navIsOpenHandler(false)} href="#pluses">
                  Переваги раціону
                </a>
              </li>
              <li>
                <a onClick={() => navIsOpenHandler(false)} href="#racion">
                  Обрати раціон
                </a>
              </li>
              <li>
                <a onClick={() => navIsOpenHandler(false)} href="#questions">
                  Питання та відповіді
                </a>
              </li>
            </ul>
          </nav>
          <aside>
            <div className={styles.hamburger} onClick={() => navIsOpenHandler(!navIsOpen)}>
              <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 18C0 16.3431 1.34315 15 3 15H35V21H3C1.34315 21 0 19.6569 0 18Z" fill="#545454" />
                <path d="M40 15H47C48.6569 15 50 16.3431 50 18C50 19.6569 48.6569 21 47 21H40V15Z" fill="#545454" />
                <path d="M0 32C0 30.3431 1.34315 29 3 29H10V35H3C1.34315 35 0 33.6569 0 32Z" fill="#545454" />
                <path d="M15 29H47C48.6569 29 50 30.3431 50 32C50 33.6569 48.6569 35 47 35H15V29Z" fill="#545454" />
              </svg>
              <p>MENU</p>
            </div>
            <div className={styles.socialContainer}>
              <a href="https://www.instagram.com/p/CHawsfgpqh4/?igshid=fk0uhmuj17ss">
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M29.9998 17.9824C23.3494 17.9824 17.9822 23.3496 17.9822 30C17.9822 36.6504 23.3494 42.0176 29.9998 42.0176C36.6502 42.0176 42.0174 36.6504 42.0174 30C42.0174 23.3496 36.6502 17.9824 29.9998 17.9824ZM29.9998 37.8106C25.699 37.8106 22.1892 34.3008 22.1892 30C22.1892 25.6992 25.699 22.1895 29.9998 22.1895C34.3006 22.1895 37.8103 25.6992 37.8103 30C37.8103 34.3008 34.3006 37.8106 29.9998 37.8106ZM42.5096 14.6895C40.9568 14.6895 39.7029 15.9434 39.7029 17.4961C39.7029 19.0488 40.9568 20.3027 42.5096 20.3027C44.0623 20.3027 45.3162 19.0547 45.3162 17.4961C45.3167 17.1274 45.2444 16.7622 45.1035 16.4215C44.9626 16.0808 44.7559 15.7712 44.4952 15.5105C44.2345 15.2498 43.9249 15.043 43.5842 14.9022C43.2434 14.7613 42.8783 14.689 42.5096 14.6895ZM53.4256 30C53.4256 26.7656 53.4549 23.5606 53.2732 20.332C53.0916 16.582 52.2361 13.2539 49.4939 10.5117C46.7459 7.76367 43.4236 6.91407 39.6736 6.73243C36.4392 6.55078 33.2342 6.58008 30.0056 6.58008C26.7713 6.58008 23.5662 6.55078 20.3377 6.73243C16.5877 6.91407 13.2596 7.76953 10.5174 10.5117C7.76932 13.2598 6.91971 16.582 6.73807 20.332C6.55643 23.5664 6.58573 26.7715 6.58573 30C6.58573 33.2285 6.55643 36.4395 6.73807 39.668C6.91971 43.418 7.77518 46.7461 10.5174 49.4883C13.2654 52.2363 16.5877 53.0859 20.3377 53.2676C23.5721 53.4492 26.7771 53.4199 30.0056 53.4199C33.24 53.4199 36.4451 53.4492 39.6736 53.2676C43.4236 53.0859 46.7517 52.2305 49.4939 49.4883C52.242 46.7402 53.0916 43.418 53.2732 39.668C53.4607 36.4395 53.4256 33.2344 53.4256 30ZM48.2693 43.8164C47.8416 44.8828 47.326 45.6797 46.4998 46.5C45.6736 47.3262 44.8826 47.8418 43.8162 48.2695C40.7342 49.4941 33.4158 49.2188 29.9998 49.2188C26.5838 49.2188 19.2596 49.4942 16.1775 48.2754C15.1111 47.8477 14.3142 47.332 13.4939 46.5059C12.6678 45.6797 12.1521 44.8887 11.7244 43.8223C10.5056 40.7344 10.781 33.416 10.781 30C10.781 26.584 10.5056 19.2598 11.7244 16.1777C12.1521 15.1113 12.6678 14.3145 13.4939 13.4941C14.3201 12.6738 15.1111 12.1523 16.1775 11.7246C19.2596 10.5059 26.5838 10.7813 29.9998 10.7813C33.4158 10.7813 40.74 10.5059 43.8221 11.7246C44.8885 12.1523 45.6853 12.668 46.5056 13.4941C47.3318 14.3203 47.8474 15.1113 48.2752 16.1777C49.4939 19.2598 49.2185 26.584 49.2185 30C49.2185 33.416 49.4939 40.7344 48.2693 43.8164Z" fill="#545454" />
                </svg>
              </a>
              <a href="https://www.facebook.com/iryna.sheremeta.98">
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M47.9364 4.56189H12.062C7.93701 4.56189 4.56201 7.93689 4.56201 12.0619V47.94C4.56201 52.065 7.93701 55.44 12.062 55.44H47.9401C52.0651 55.44 55.4401 52.065 55.4401 47.94V12.0619C55.4364 7.93689 52.0651 4.56189 47.9364 4.56189ZM47.4545 31.7175H41.417V53.5613H32.3833V31.7175H27.8645V24.1875H32.3833V19.6688C32.3833 13.5263 34.9333 9.87189 42.1895 9.87189H48.2214V17.4H44.4489C41.6289 17.4 41.4414 18.4556 41.4414 20.4188L41.417 24.1875H48.2514L47.4526 31.7175H47.4545Z" fill="#545454" />
                </svg>
              </a>
            </div>
          </aside>
        </div>
      </header>
      <div id="nextScreen" />
      <Title text="Правильне харчування дозволить нам бути здоровими та красивими." />
      <PhotoFood />
      <div id="pluses" />
      <Title text="Після отримання раціону ти зможеш" />
      <div className={styles.titleContainer}>
        {
          innerTitles.map((title, key) => <FlowerTitleSection title={title} key={key} />)
        }
      </div>
      <div className={styles.aboutRacion}>
        <p>
          План харчування складає середземноморський раціон,
          який являється по суті збалансованим здоровим харчуванням.
          Він не є протипоказаний і не несе загрози для здоров’я.
          Меню збалансоване, складає всі необхідні для організму речовини,
          і тому не забороняється людям із захворюваннями,
          вагітним та годуючим.
        </p>
        {/* <button type="button">
          ОЗНАЙОМИТИСЬ
          ІЗ РАЦІОНОМ
        </button> */}
      </div>
      <div className={styles.giftContainer}>
        <svg width="200" height="200" viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M160 894C160 911.7 174.3 926 192 926H478V550H160V894ZM546 926H832C849.7 926 864 911.7 864 894V550H546V926ZM880 310H732.4C746 288.6 754 263.2 754 236C754 159.9 692.1 98 616 98C574.6 98 537.3 116.4 512 145.4C486.7 116.4 449.4 98 408 98C331.9 98 270 159.9 270 236C270 263.2 277.9 288.6 291.6 310H144C126.3 310 112 324.3 112 342V482H478V310H546V482H912V342C912 324.3 897.7 310 880 310ZM478 306H408C369.4 306 338 274.6 338 236C338 197.4 369.4 166 408 166C446.6 166 478 197.4 478 236V306ZM616 306H546V236C546 197.4 577.4 166 616 166C654.6 166 686 197.4 686 236C686 274.6 654.6 306 616 306Z" fill="rgba(236, 160, 72, .7)" />
        </svg>

        <div>
          <p>В подарунок Ви отримаєте</p>
          <p>гайд “Гормони щастя”</p>
        </div>
      </div>

      <div id="racion" />
      <Title text="Оберіть раціон який підходить саме Вам" />
      <BoxData getResultHandler={(value) => getResultHandler(value)} />
      <div id="result" />
      <Title text="ВАШІ РЕЗУЛЬТАТИ" isColor />
      {
        getResult
          ? (
            <>
              <Table
                index={getResult.IMT}
                weight={getResult.idealWeight}
                calories={getResult.calories}
                caloriesWithSport={getResult.caloriesWithSport}
              />

              <div className={styles.btnContainer}>
                <button
                  type="button"
                  onClick={() => getTypeMenu(0)}
                  style={{ backgroundColor: getMenu === 0 ? 'rgba(236, 160, 72, 0.7)' : 'transparent' }}
                >
                  Хочу підтримувати вагу
                </button>
                <button
                  type="button"
                  onClick={() => getTypeMenu(1)}
                  style={{ backgroundColor: getMenu === 1 ? 'rgba(236, 160, 72, 0.7)' : 'transparent' }}
                >
                  Хочу схуднути
                </button>

              </div>
              {
                typeMenu
                  ? <p className={styles.calNeed}>{`При вказаних вище параметрах Вам необхідно дотримуватись раціону в ${typeMenu} калорій`}</p>
                  : null
              }
              <div className={styles.btnContainer}>
                {
                  typeMenu
                    ? (
                      <>
                        <button
                          type="button"
                          onClick={() => choosedMenuHandler(1200)}
                          style={{ backgroundColor: choosedMenu === 1200 ? 'rgba(236, 160, 72, 0.7)' : 'transparent' }}
                        >
                          1200
                        </button>
                        <button
                          type="button"
                          onClick={() => choosedMenuHandler(1300)}
                          style={{ backgroundColor: choosedMenu === 1300 ? 'rgba(236, 160, 72, 0.7)' : 'transparent' }}
                        >
                          1300
                        </button>
                        <button
                          type="button"
                          onClick={() => choosedMenuHandler(1400)}
                          style={{ backgroundColor: choosedMenu === 1400 ? 'rgba(236, 160, 72, 0.7)' : 'transparent' }}
                        >
                          1400
                        </button>
                        <button
                          type="button"
                          onClick={() => choosedMenuHandler(1500)}
                          style={{ backgroundColor: choosedMenu === 1500 ? 'rgba(236, 160, 72, 0.7)' : 'transparent' }}
                        >
                          1500
                        </button>
                        <button
                          type="button"
                          onClick={() => choosedMenuHandler(1600)}
                          style={{ backgroundColor: choosedMenu === 1600 ? 'rgba(236, 160, 72, 0.7)' : 'transparent' }}
                        >
                          1600
                        </button>
                      </>
                    )
                    : null
                }

              </div>
              <div className={styles.btnContainer}>
                {
                  choosedMenu !== null
                    ? (
                      <Title text={`Ви обрали раціон із калорійністю ${choosedMenu}`} />
                    )
                    : null
                }
              </div>
              <div className={styles.btnContainer}>
                {
                  choosedMenu !== null
                    ? (
                      <LiqPayPay
                        publicKey="sandbox_i39047898628"
                        privateKey="sandbox_KKI5zgxZUbKFhSMNamE1ekbFL9faSYy36PXuDVpF"
                        amount="499"
                        description="Payment for product"
                        currency="UAH"
                        orderId={Math.floor(1 + Math.random() * 900000000)}
                        result_url={`https://foodcoachiryna.com.ua/recipe${typeMenu}`}
                        server_url="https://www.liqpay.ua/checkout/i58423322834"
                        product_description="Online courses"
                        style={{ margin: '8px' }}
                        title="Оплатити"
                      />
                    )
                    : null
                }
              </div>

            </>
          )
          : null
      }
      <div id="questions" />
      <Title text="ВІДПОВІДІ НА МОЖЛИВІ ПИТАННЯ" />
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
      </div>
    </div>
  )
}

export default Home
