import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaTelegramPlane } from 'react-icons/fa'
import styles from './Footer.module.css'

const links = [
  'Receive SMS online', 'Rent', 'API connection', 'Referral program',
  'Partnership', 'Partners', 'Blog', 'Help',
]

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        {/* Logo */}
        <div className={styles.logo}>
          <span className={styles.logoBox}>SMS</span>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <rect width="18" height="18" rx="4" fill="#60a5fa"/>
            <path d="M4 9h10M9 4v10" stroke="#1a3a8f" strokeWidth="2" strokeLinecap="round"/>
          </svg>
          <span className={styles.logoText}>MAN</span>
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
