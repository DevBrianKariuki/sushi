import React from 'react'
import styles from './constants/styles'
import { Navbar, Categories, Footer, Hero, OurStory, SpecialDishes, Testimonials  } from './Components'

const App = () => (

  <div id='main-div' className={`bg-gradient-to-r from-bgColorOne to-bgColorTwo w-full overflow-hidden`}>
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
        <Hero />
      </div>
    </div>

    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Categories />
        <SpecialDishes />
        <Testimonials />
        <OurStory />
        <Footer />
      </div>
    </div>
  </div>

  )

export default App