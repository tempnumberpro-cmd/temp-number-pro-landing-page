import { useState, useEffect } from 'react'
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi'
import styles from './Navbar.module.css'

const navLinks = [
  { label: 'SMS Online', href: '#sms-online' },
  { label: 'Rent', href: '#rent' },
  { label: 'Blog', href: '#blog' },
  { label: 'Help', href: '#help' },
]

const countries = [
  { code: 'pk', name: 'Pakistan', flag: 'https://flagcdn.com/w40/pk.png' },
  { code: 'us', name: 'United States', flag: 'https://flagcdn.com/w40/us.png' },
  { code: 'ae', name: 'UAE', flag: 'https://flagcdn.com/w40/ae.png' },
  { code: 'gb', name: 'United Kingdom', flag: 'https://flagcdn.com/w40/gb.png' },
  { code: 'ca', name: 'Canada', flag: 'https://flagcdn.com/w40/ca.png' },
  { code: 'au', name: 'Australia', flag: 'https://flagcdn.com/w40/au.png' },
  { code: 'de', name: 'Germany', flag: 'https://flagcdn.com/w40/de.png' },
  { code: 'fr', name: 'France', flag: 'https://flagcdn.com/w40/fr.png' },
  { code: 'it', name: 'Italy', flag: 'https://flagcdn.com/w40/it.png' },
  { code: 'es', name: 'Spain', flag: 'https://flagcdn.com/w40/es.png' },
  { code: 'nl', name: 'Netherlands', flag: 'https://flagcdn.com/w40/nl.png' },
  { code: 'be', name: 'Belgium', flag: 'https://flagcdn.com/w40/be.png' },
  { code: 'se', name: 'Sweden', flag: 'https://flagcdn.com/w40/se.png' },
  { code: 'ch', name: 'Switzerland', flag: 'https://flagcdn.com/w40/ch.png' },
  { code: 'at', name: 'Austria', flag: 'https://flagcdn.com/w40/at.png' },
  { code: 'pt', name: 'Portugal', flag: 'https://flagcdn.com/w40/pt.png' },
  { code: 'pl', name: 'Poland', flag: 'https://flagcdn.com/w40/pl.png' },
  { code: 'cz', name: 'Czechia', flag: 'https://flagcdn.com/w40/cz.png' },
  { code: 'gr', name: 'Greece', flag: 'https://flagcdn.com/w40/gr.png' },
  { code: 'ie', name: 'Ireland', flag: 'https://flagcdn.com/w40/ie.png' },
  { code: 'in', name: 'India', flag: 'https://flagcdn.com/w40/in.png' },
  { code: 'bd', name: 'Bangladesh', flag: 'https://flagcdn.com/w40/bd.png' },
  { code: 'lk', name: 'Sri Lanka', flag: 'https://flagcdn.com/w40/lk.png' },
  { code: 'np', name: 'Nepal', flag: 'https://flagcdn.com/w40/np.png' },
  { code: 'sa', name: 'Saudi Arabia', flag: 'https://flagcdn.com/w40/sa.png' },
  { code: 'qa', name: 'Qatar', flag: 'https://flagcdn.com/w40/qa.png' },
  { code: 'kw', name: 'Kuwait', flag: 'https://flagcdn.com/w40/kw.png' },
  { code: 'om', name: 'Oman', flag: 'https://flagcdn.com/w40/om.png' },
  { code: 'jo', name: 'Jordan', flag: 'https://flagcdn.com/w40/jo.png' },
  { code: 'lb', name: 'Lebanon', flag: 'https://flagcdn.com/w40/lb.png' },
  { code: 'eg', name: 'Egypt', flag: 'https://flagcdn.com/w40/eg.png' },
  { code: 'ng', name: 'Nigeria', flag: 'https://flagcdn.com/w40/ng.png' },
  { code: 'ke', name: 'Kenya', flag: 'https://flagcdn.com/w40/ke.png' },
  { code: 'za', name: 'South Africa', flag: 'https://flagcdn.com/w40/za.png' },
  { code: 'gh', name: 'Ghana', flag: 'https://flagcdn.com/w40/gh.png' },
  { code: 'tz', name: 'Tanzania', flag: 'https://flagcdn.com/w40/tz.png' },
  { code: 'ug', name: 'Uganda', flag: 'https://flagcdn.com/w40/ug.png' },
  { code: 'br', name: 'Brazil', flag: 'https://flagcdn.com/w40/br.png' },
  { code: 'mx', name: 'Mexico', flag: 'https://flagcdn.com/w40/mx.png' },
  { code: 'ar', name: 'Argentina', flag: 'https://flagcdn.com/w40/ar.png' },
  { code: 'co', name: 'Colombia', flag: 'https://flagcdn.com/w40/co.png' },
  { code: 'pe', name: 'Peru', flag: 'https://flagcdn.com/w40/pe.png' },
  { code: 'cl', name: 'Chile', flag: 'https://flagcdn.com/w40/cl.png' },
  { code: 've', name: 'Venezuela', flag: 'https://flagcdn.com/w40/ve.png' },
  { code: 'jp', name: 'Japan', flag: 'https://flagcdn.com/w40/jp.png' },
  { code: 'cn', name: 'China', flag: 'https://flagcdn.com/w40/cn.png' },
  { code: 'kr', name: 'South Korea', flag: 'https://flagcdn.com/w40/kr.png' },
  { code: 'sg', name: 'Singapore', flag: 'https://flagcdn.com/w40/sg.png' },
  { code: 'my', name: 'Malaysia', flag: 'https://flagcdn.com/w40/my.png' },
  { code: 'th', name: 'Thailand', flag: 'https://flagcdn.com/w40/th.png' },
  { code: 'id', name: 'Indonesia', flag: 'https://flagcdn.com/w40/id.png' },
  { code: 'ph', name: 'Philippines', flag: 'https://flagcdn.com/w40/ph.png' },
  { code: 'vn', name: 'Vietnam', flag: 'https://flagcdn.com/w40/vn.png' },
  { code: 'nz', name: 'New Zealand', flag: 'https://flagcdn.com/w40/nz.png' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const [selectedCountry, setSelectedCountry] = useState(countries[0])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (e) => {
      const langSelector = document.querySelector(`.${styles.langSelector}`)
      if (langSelector && !langSelector.contains(e.target)) {
        setLangOpen(false)
      }
    }
    if (langOpen) {
      document.addEventListener('click', handleClickOutside)
      return () => document.removeEventListener('click', handleClickOutside)
    }
  }, [langOpen])

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>
        {/* Logo */}
        <a href="#home" className={styles.logo}>
          <img src="/assets/sim-card-icon.png" alt="TEMP NUMBER PRO" className={styles.logoIcon} />
          <span className={styles.logoBox}>TEMP NUMBER</span>
          <span className={styles.logoText}>PRO</span>
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
          <div className={styles.langSelector}>
            <button
              className={styles.langBtn}
              onClick={() => setLangOpen(!langOpen)}
            >
              <img src={selectedCountry.flag} alt={selectedCountry.name} className={styles.flagIcon} />
              <FiChevronDown size={14} />
            </button>
            {langOpen && (
              <div className={styles.langDropdown}>
                {countries.map((country) => (
                  <button
                    key={country.code}
                    className={styles.langOption}
                    onClick={() => {
                      setSelectedCountry(country)
                      setLangOpen(false)
                    }}
                  >
                    <img src={country.flag} alt={country.name} className={styles.flagIcon} />
                    <span>{country.name}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
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
          </div>
        </div>
      )}
    </nav>
  )
}
