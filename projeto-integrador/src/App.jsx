import Spline from '@splinetool/react-spline';
import styles from "./style";
import Billing from "./components/Billing"
import Business from "./components/Business"
import CardDeal from "./components/CardDeal"
import Clients from "./components/Clients"
import CTA from "./components/CTA"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Stats from "./components/Stats"
import Testimonials from "./components/Testimonials"
import Hero from "./components/Hero"

const App = () => (
  <div className="bg-neutral-950 w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-neutral-950 ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    
    <div className={`bg-neutral-950 ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <Business />
        <Billing />
        <CardDeal />
        <Testimonials />
        <Clients />
        <CTA />
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
/* <Spline scene="https://prod.spline.design/pvRP-ONEsYV3HJdr/scene.splinecode" style={{width:'80%', alignSelf: 'flex-end'}}/> */
