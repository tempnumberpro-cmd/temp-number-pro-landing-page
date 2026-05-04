import { useState, useEffect } from 'react'
import { FiGlobe, FiMenu, FiX, FiChevronDown } from 'react-icons/fi'
import { FaGooglePlay } from 'react-icons/fa'
import styles from './Navbar.module.css'

const navLinks = [
  { label: 'SMS Online', href: '#' },
  { label: 'Rent', href: '#' },
  { label: 'Blog', href: '#' },
  { label: 'Help', href: '#' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>
        {/* Logo */}
        <a href="#" className={styles.logo}>
          <span className={styles.logoBox}>SMS</span>
          <span className={styles.logoMid}>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <rect width="18" height="18" rx="4" fill="#2563eb"/>
              <path d="M4 9h10M9 4v10" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </span>
          <span className={styles.logoText}>MAN</span>
        </a>

        {/* Desktop Links */}
        <ul className={styles.links}>
          {navLinks.map((link) => (
            <li key={link.label}>
              <a href={link.href} className={styles.link}>
                {link.label}
                {link.label === 'SMS Online' && (
                  <span className={styles.activeBar} />
                )}
              </a>
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className={styles.actions}>
          <a href="https://play.google.com/store/apps/details?id=com.tempnumberpro" target="_blank" rel="noopener noreferrer" className={styles.playStoreBtn}>
            <FaGooglePlay size={16} />
            Play Store
          </a>
          <button className={styles.btnOutline}>Sign Up</button>
          <button className={styles.btnOutline}>Log In</button>
          <button className={styles.langBtn}>
            <FiGlobe size={18} />
            <FiChevronDown size={14} />
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className={styles.mobileMenu}>
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className={styles.mobileLink}
               onClick={() => setMenuOpen(false)}>
              {link.label}
            </a>
          ))}
          <div className={styles.mobileActions}>
            <a href="https://play.google.com/store/apps/details?id=com.tempnumberpro" target="_blank" rel="noopener noreferrer" className={styles.playStoreBtn}>
              <FaGooglePlay size={16} />
              Play Store
            </a>
            <button className={styles.btnOutline}>Sign Up</button>
            <button className={styles.btnOutline}>Log In</button>
          </div>
        </div>
      )}
    </nav>
  )
}
