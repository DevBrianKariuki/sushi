import styles from './constants/styles'
import { Navbar, Categories, Footer, Hero, OurStory, SpecialDishes, Testimonials  } from './Components'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cart from './Components/Cart';

const Main = () => (
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
);

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
};

export default App;

  
  


















