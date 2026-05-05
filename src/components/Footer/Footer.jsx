import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaTelegramPlane } from 'react-icons/fa'
import simIcon from '../../../assets/sim-card-icon.png'
import styles from './Footer.module.css'

const links = [
  'Receive SMS online', 'Rent', 'Referral program',
  'Partnership', 'Partners', 'Blog', 'Help',
]

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        {/* Logo */}
        <div className={styles.logo}>
          <img src={simIcon} alt="TEMP NUMBER PRO" className={styles.logoIcon} />
          <span className={styles.logoBox}>TEMP NUMBER</span>
          <span className={styles.logoText}>PRO</span>
        </div>

        {/* Links grid */}
        <div className={styles.linksGrid}>
          {links.map((l) => (
            <a key={l} href="#" className={styles.link}>{l}</a>
          ))}
        </div>

        {/* Social icons */}
        <div className={styles.socials}>
          <a href="#" className={styles.socialIcon}><FaFacebook size={18} /></a>
          <a href="#" className={styles.socialIcon}><FaTwitter size={18} /></a>
          <a href="#" className={styles.socialIcon}><FaInstagram size={18} /></a>
          <a href="#" className={styles.socialIcon}><FaYoutube size={18} /></a>
          <a href="#" className={styles.socialIcon}><FaTelegramPlane size={18} /></a>
        </div>
      </div>
    </footer>
  )
}
