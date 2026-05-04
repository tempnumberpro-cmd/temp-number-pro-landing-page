import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import SelectorWidget from './components/SelectorWidget/SelectorWidget'
import PopularServices from './components/PopularServices/PopularServices'
import PrivacyProblem from './components/PrivacyProblem/PrivacyProblem'
import AboutSection from './components/AboutSection/AboutSection'
import HowItWorks from './components/HowItWorks/HowItWorks'
import BuyRentCTA from './components/BuyRentCTA/BuyRentCTA'
import VirtualNumberDesc from './components/VirtualNumberDesc/VirtualNumberDesc'
import FeaturesGrid from './components/FeaturesGrid/FeaturesGrid'
import FAQ from './components/FAQ/FAQ'
import Footer from './components/Footer/Footer'

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <SelectorWidget />
      <PopularServices />
      <PrivacyProblem />
      <AboutSection />
      <HowItWorks />
      <BuyRentCTA />
      <VirtualNumberDesc />
      <FeaturesGrid />
      <FAQ />
      <Footer />
    </div>
  )
}
