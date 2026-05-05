import styles from './Hero.module.css'
import {
  FaTelegram, FaWhatsapp, FaYoutube, FaPaypal,
  FaGoogle, FaFacebook, FaTwitter,
  FaLinkedin, FaAmazon, FaEnvelope
} from 'react-icons/fa'
import { SiEbay, SiVk } from 'react-icons/si'
import appleStoreWhite from '../../../assets/apple-store-button-white.png'
import googlePlayWhite from '../../../assets/google-play-icon-white.png'

const floatingIcons = [
  // Top row
  { Icon: FaTelegram, color: '#0088cc', top: '0%',  left: '8%',  delay: '0s' },
  { Icon: FaGoogle,   color: '#EA4335', top: '3%',  left: '20%',  delay: '0.9s' },
  { Icon: SiEbay,     color: '#E53238', top: '4%',  left: '35%',  delay: '0.9s' },
  { Icon: FaYoutube,  color: '#FF0000', top: '2%',  left: '65%',  delay: '0.8s' },
  { Icon: FaPaypal,   color: '#003087', top: '6%',  left: '78%',  delay: '0.2s' },
  
  // Left side
  { Icon: FaEnvelope, color: '#EA4335', top: '16%', left: '1%',  delay: '0.6s' },
  { Icon: FaAmazon,   color: '#FF9900', top: '32%', left: '2%',  delay: '0.5s' },
  { Icon: FaWhatsapp, color: '#25D366', top: '60%', left: '3%',  delay: '0.4s' },
  
  // Right side  
  { Icon: FaWhatsapp, color: '#25D366', top: '14%', left: '85%',  delay: '0.4s' },
  { Icon: FaFacebook, color: '#1877F2', top: '38%', left: '80%',  delay: '1s' },
  { Icon: FaGoogle,   color: '#EA4335', top: '52%', left: '85%',  delay: '0.6s' },
  { Icon: SiVk,       color: '#0077FF', top: '68%', left: '82%',  delay: '0.7s' },
  
  // Bottom
  { Icon: FaTwitter,  color: '#1DA1F2', top: '64%', left: '42%',  delay: '0.3s' },
  { Icon: FaLinkedin, color: '#0A66C2', top: '72%', left: '60%',  delay: '1.1s' },
]

export default function Hero() {
  return (
    <section className={styles.hero} id="home">
      <div className={`container ${styles.inner}`}>
        {/* Left column */}
        <div className={styles.left}>
          <h1 className={styles.heading}>Receive SMS online</h1>
          <p className={styles.sub}>
            Register on social networks, marketplaces, exchanges and online
            services <strong>without spam</strong> and{' '}
            <a href="#" className={styles.link}>disclosure of personal data.</a>
          </p>
          <div className={styles.storeRow}>
            <a href="#" className={styles.storeLink} aria-label="Download on the App Store">
              <img src={appleStoreWhite} alt="Download on the App Store" className={styles.storeBadge} />
            </a>
            <a href="#" className={styles.storeLink} aria-label="Get it on Google Play">
              <img src={googlePlayWhite} alt="Get it on Google Play" className={styles.storeBadge} />
            </a>
          </div>
        </div>

        <div className={styles.right}>

          {/* Floating icons */}
          <div>
              {floatingIcons.map(({ Icon, color, top, left, delay }, i) => (
            <div
              key={i}
              className={`${styles.floatIcon} ${i % 2 === 0 ? styles.floatA : styles.floatB}`}
              style={{ top, left, animationDelay: delay }}
            >
              <Icon color={color} size={24} />
            </div>
          ))}
          </div>

          {/* Phone image */}
            <img src="/assets/mobile.png" alt="Mobile phone" />

          <div className={styles.smsBubbleWrapper}>
            <div className={styles.smsBubble}>
              <span>Your SMS code for registration in the service is 12344. Enter it on the site! 👋</span>
            </div>
          </div>
        </div>

        {/* Right column – phone mockup + floating icons */}
        <div className={styles.rightold}>
          {/* Badge */}
          <div className={styles.badge}>1000+</div>

          {/* SMS bubble above phone */}
          <div className={styles.smsBubbleWrapper}>
            <div className={styles.smsBubble}>
              <span>Your SMS code for registration in the service is 12344. Enter it on the site! 👋</span>
            </div>
          </div>

          {/* Phone image */}
          <div className={styles.phoneImage}>
            <img src="/assets/mobile.png" alt="Mobile phone" />
            
          </div>

          {/* Floating service icons */}
          {floatingIcons.map(({ Icon, color, top, left, delay }, i) => (
            <div
              key={i}
              className={`${styles.floatIcon} ${i % 2 === 0 ? styles.floatA : styles.floatB}`}
              style={{ top, left, animationDelay: delay }}
            >
              <Icon color={color} size={24} />
            </div>
          ))}
        </div>
      </div>

      {/* Check how it works */}
      {/* <div className={styles.checkRow}>
        <a href="#how-it-works" className={styles.checkLink}>
          Check how it works!
          <FiArrowDown size={16} style={{ marginLeft: 6 }} />
        </a>
      </div> */}
    </section>
  )
}
