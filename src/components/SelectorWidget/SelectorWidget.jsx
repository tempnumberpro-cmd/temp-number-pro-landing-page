import { useState } from 'react'
import { FiSearch, FiRefreshCw } from 'react-icons/fi'
import styles from './SelectorWidget.module.css'

const countries = [
  { flag: '🇺🇸', name: 'USA',         price: '$0.05' },
  { flag: '🇨🇳', name: 'China',       price: '$0.07' },
  { flag: '🇰🇿', name: 'Kazakhstan',  price: '$5.00' },
  { flag: '🇲🇾', name: 'Malaysia',    price: '$0.08' },
  { flag: '🇮🇩', name: 'Indonesia',   price: '$0.08' },
  { flag: '🇵🇭', name: 'Philippines', price: '$0.10' },
  { flag: '🇲🇲', name: 'Myanmar',     price: '$14.00' },
  { flag: '🇻🇳', name: 'Vietnam',     price: '$0.10' },
  { flag: '🇷🇴', name: 'Romania',     price: '$0.12' },
  { flag: '🇵🇱', name: 'Poland',      price: '$0.12' },
  { flag: '🇨🇦', name: 'Canada',      price: '$0.08' },
  { flag: '🇬🇧', name: 'UK',          price: '$0.15' },
  { flag: '🇩🇪', name: 'Germany',     price: '$0.12' },
  { flag: '🇫🇷', name: 'France',      price: '$0.12' },
  { flag: '🇧🇷', name: 'Brazil',      price: '$0.10' },
  { flag: '🇮🇳', name: 'India',       price: '$0.07' },
  { flag: '🇷🇺', name: 'Russia',      price: '$0.06' },
  { flag: '🇺🇦', name: 'Ukraine',     price: '$0.08' },
  { flag: '🇹🇷', name: 'Turkey',      price: '$0.09' },
  { flag: '🇲🇽', name: 'Mexico',      price: '$0.10' },
]

const services = [
  { icon: '💼', name: 'LinkedIn',       price: '$0.18' },
  { icon: '💬', name: 'Tencent',        price: '$1.90' },
  { icon: '🐟', name: 'Plenty Of Fish', price: '$0.12' },
  { icon: '🟡', name: 'Yalla',          price: '$1.90' },
  { icon: '🔑', name: 'Kolesa.kz',      price: '$0.18' },
  { icon: '🇰🇷', name: 'Naver',          price: '$0.22' },
  { icon: '🎬', name: 'Netflix',         price: '$0.24' },
  { icon: '💬', name: 'ICQ',             price: '$0.38' },
  { icon: '📱', name: 'Imo',             price: '$1.90' },
  { icon: '💚', name: 'Michat',          price: '$2.32' },
  { icon: '📞', name: 'WhatsApp',        price: '$0.09' },
  { icon: '✈️', name: 'Telegram',        price: '$0.07' },
]

export default function SelectorWidget() {
  const [countrySearch, setCountrySearch] = useState('')
  const [serviceSearch, setServiceSearch] = useState('')
  const [selectedCountry, setSelectedCountry] = useState('USA')
  const [selectedService, setSelectedService] = useState('LinkedIn')

  const filteredCountries = countries.filter(c =>
    c.name.toLowerCase().includes(countrySearch.toLowerCase())
  )
  const filteredServices = services.filter(s =>
    s.name.toLowerCase().includes(serviceSearch.toLowerCase())
  )

  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.heading}>
          Choose your country and service<br />receive SMS right now
        </h2>

        <div className={styles.card}>
          {/* Country Panel */}
          <div className={styles.panel}>
            <div className={styles.panelHeader}>
              <span className={styles.step}>1. Select country</span>
            </div>
            <div className={styles.searchBar}>
              <FiSearch size={15} className={styles.searchIcon} />
              <input
                type="text"
                placeholder="Search"
                value={countrySearch}
                onChange={e => setCountrySearch(e.target.value)}
                className={styles.searchInput}
              />
            </div>
            <ul className={styles.list}>
              {filteredCountries.map(c => (
                <li
                  key={c.name}
                  className={`${styles.item} ${selectedCountry === c.name ? styles.selected : ''}`}
                  onClick={() => setSelectedCountry(c.name)}
                >
                  <span className={styles.flag}>{c.flag}</span>
                  <span className={styles.itemName}>{c.name}</span>
                  <span className={styles.itemPrice}>{c.price}</span>
                </li>
              ))}
            </ul>
            <p className={styles.countNote}>Available countries — {countries.length}</p>
          </div>

          {/* Divider with swap icon */}
          <div className={styles.divider}>
            <button className={styles.swapBtn} aria-label="swap">
              <FiRefreshCw size={16} />
            </button>
          </div>

          {/* Service Panel */}
          <div className={styles.panel}>
            <div className={styles.panelHeader}>
              <span className={styles.step}>2. Select a service</span>
            </div>
            <div className={styles.searchBar}>
              <FiSearch size={15} className={styles.searchIcon} />
              <input
                type="text"
                placeholder="Search"
                value={serviceSearch}
                onChange={e => setServiceSearch(e.target.value)}
                className={styles.searchInput}
              />
            </div>
            <ul className={styles.list}>
              {filteredServices.map(s => (
                <li
                  key={s.name}
                  className={`${styles.item} ${selectedService === s.name ? styles.selected : ''}`}
                  onClick={() => setSelectedService(s.name)}
                >
                  <span className={styles.serviceIcon}>{s.icon}</span>
                  <span className={styles.itemName}>{s.name}</span>
                  <span className={styles.itemPrice}>{s.price}</span>
                </li>
              ))}
            </ul>
            <div className={styles.panelFooter}>
              <span className={styles.countNote}>Available services — {services.length * 33}</span>
              <button className={styles.receiveBtn}>Receive SMS</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
