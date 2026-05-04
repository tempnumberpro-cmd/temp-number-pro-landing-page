import styles from './Hero.module.css'
import {
  FaTelegram, FaWhatsapp, FaYoutube, FaPaypal,
  FaGoogle, FaFacebook, FaTwitter, FaInstagram,
  FaLinkedin, FaAmazon
} from 'react-icons/fa'
import { FiArrowDown } from 'react-icons/fi'
import { FaGooglePlay, FaApple } from 'react-icons/fa'

const floatingIcons = [
  { Icon: FaTelegram, color: '#0088cc', top: '8%',  left: '52%',  delay: '0s' },
  { Icon: FaWhatsapp, color: '#25D366', top: '18%', left: '78%',  delay: '0.4s' },
  { Icon: FaYoutube,  color: '#FF0000', top: '5%',  left: '68%',  delay: '0.8s' },
  { Icon: FaPaypal,   color: '#003087', top: '28%', left: '88%',  delay: '0.2s' },
  { Icon: FaGoogle,   color: '#EA4335', top: '42%', left: '74%',  delay: '0.6s' },
  { Icon: FaFacebook, color: '#1877F2', top: '55%', left: '85%',  delay: '1s' },
  { Icon: FaTwitter,  color: '#1DA1F2', top: '62%', left: '62%',  delay: '0.3s' },
  { Icon: FaInstagram,color: '#E1306C', top: '72%', left: '79%',  delay: '0.7s' },
  { Icon: FaLinkedin, color: '#0A66C2', top: '20%', left: '57%',  delay: '1.1s' },
  { Icon: FaAmazon,   color: '#FF9900', top: '48%', left: '53%',  delay: '0.5s' },
]

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.inner}`}>
        {/* Left column */}
        <div className={styles.left}>
          <h1 className={styles.heading}>Receive SMS Online Instantly</h1>
          <p className={styles.sub}>
            Register on social networks, marketplaces, exchanges and online
            services <strong>without spam</strong> and{' '}
            <a href="#" className={styles.link}>disclosure of personal data.</a>
          </p>
          <div className={styles.ctaRow}>
            <button className={styles.btnWhite}>Receive SMS</button>
            <button className={styles.btnOutline}>Rent number</button>
          </div>

          <div className={styles.appDownload}>
            <p className={styles.downloadLabel}>Download our app</p>
            <div className={styles.storeButtons}>
              <a href="https://play.google.com/store/apps/details?id=com.tempnumberpro" target="_blank" rel="noopener noreferrer" className={styles.storeBtn}>
                <FaGooglePlay size={16} />
                <span>Google Play</span>
              </a>
              <a href="https://apps.apple.com/app/tempnumberpro" target="_blank" rel="noopener noreferrer" className={styles.storeBtn}>
                <FaApple size={16} />
                <span>App Store</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right column – phone mockup + floating icons */}
        <div className={styles.right}>
          {/* Badge */}
          <div className={styles.badge}>
            <span className={styles.badgeText}>1000+</span>
            <span className={styles.badgeSub}>Happy Users</span>
          </div>

          {/* Phone */}
          <div className={styles.phoneContainer}>
            <div className={styles.phone}>
              <div className={styles.phoneNotch} />
              <div className={styles.phoneScreen}>
                {/* SMS bubble on phone */}
                <div className={styles.phoneHeader}>
                  <span className={styles.carrier}>TempNumber Pro</span>
                  <span className={styles.time}>9:41</span>
                </div>
                <div className={styles.smsBubble}>
                  <span>Your SMS code for registration in the service is 12344. Enter it on the site! 🐻</span>
                </div>
              </div>
              <div className={styles.phoneHome} />
            </div>
            <div className={styles.phoneGlow} />
          </div>

          {/* Floating service icons */}
          {floatingIcons.map(({ Icon, color, top, left, delay }, i) => (
            <div
              key={i}
              className={`${styles.floatIcon} ${i % 2 === 0 ? styles.floatA : styles.floatB}`}
              style={{ top, left, animationDelay: delay }}
            >
              <Icon color={color} size={20} />
            </div>
          ))}
        </div>
      </div>

      {/* Check how it works */}
      <div className={styles.checkRow}>
        <a href="#how-it-works" className={styles.checkLink}>
          Check how it works!
          <FiArrowDown size={16} style={{ marginLeft: 6 }} />
        </a>
      </div>
    </section>
  )
}
