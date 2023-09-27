import Spline from '@splinetool/react-spline';
import styles from './style';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

const App = () => (
  <div className="bg-primary w-full overflow-hidden"> 
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        Navbar
      </div>
    </div>
    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${$styles.boxWidth}`}>
        Hero
      </div>

      <div className={`bg-primary ${stles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          Stats
          Business
          Billing
          CardDeal
          Testimonials
          Clients
          CTA
          Footer
        </div>
      </div>
    </div>
  </div>
    /* <Spline scene="https://prod.spline.design/pvRP-ONEsYV3HJdr/scene.splinecode" style={{width:'80%', alignSelf: 'flex-end'}}/> */

);
  


export default App
