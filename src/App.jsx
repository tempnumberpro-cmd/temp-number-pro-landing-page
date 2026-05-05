import { useEffect, useRef, useState } from 'react'
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
import styles from './App.module.css'

export default function App() {
  const [toastVisible, setToastVisible] = useState(false)
  const [toastMessage, setToastMessage] = useState('Please download the mobile app to use this feature.')
  const toastTimer = useRef(null)

  useEffect(() => {
    const showAppToast = (event) => {
      const target = event.target.closest('button, a, [role="button"]')

      if (!target) return
      if (target.closest('[data-no-toast]')) return
      if (target.closest('nav')) return
      if (target.closest('#help')) return
      if (target.closest('footer')) return

      setToastMessage(target.dataset.toastMessage || 'Please download the mobile app to use this feature.')
      setToastVisible(true)
      window.clearTimeout(toastTimer.current)
      toastTimer.current = window.setTimeout(() => {
        setToastVisible(false)
      }, 2600)
    }

    document.addEventListener('click', showAppToast)

    return () => {
      document.removeEventListener('click', showAppToast)
      window.clearTimeout(toastTimer.current)
    }
  }, [])

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
      <div
        className={`${styles.toast} ${toastVisible ? styles.toastVisible : ''}`}
        role="status"
        aria-live="polite"
      >
        {toastMessage}
      </div>
    </div>
  )
}
