import { useState } from 'react'
import { FiSearch, FiRefreshCw } from 'react-icons/fi'
import {
  FaTelegram, FaWhatsapp, FaYoutube, FaPaypal,
  FaGoogle, FaFacebook, FaTwitter,
  FaLinkedin, FaAmazon, FaEnvelope
} from 'react-icons/fa'
import { SiEbay, SiVk } from 'react-icons/si'
import styles from './SelectorWidget.module.css'

const countries = [
  { code: 'us', flag: 'https://flagcdn.com/w40/us.png', name: 'USA',         price: '$0.05' },
  { code: 'cn', flag: 'https://flagcdn.com/w40/cn.png', name: 'China',       price: '$0.07' },
  { code: 'kz', flag: 'https://flagcdn.com/w40/kz.png', name: 'Kazakhstan',  price: '$5.00' },
  { code: 'my', flag: 'https://flagcdn.com/w40/my.png', name: 'Malaysia',    price: '$0.08' },
  { code: 'id', flag: 'https://flagcdn.com/w40/id.png', name: 'Indonesia',   price: '$0.08' },
  { code: 'ph', flag: 'https://flagcdn.com/w40/ph.png', name: 'Philippines', price: '$0.10' },
  { code: 'mm', flag: 'https://flagcdn.com/w40/mm.png', name: 'Myanmar',     price: '$14.00' },
  { code: 'vn', flag: 'https://flagcdn.com/w40/vn.png', name: 'Vietnam',     price: '$0.10' },
  { code: 'ro', flag: 'https://flagcdn.com/w40/ro.png', name: 'Romania',     price: '$0.12' },
  { code: 'pl', flag: 'https://flagcdn.com/w40/pl.png', name: 'Poland',      price: '$0.12' },
  { code: 'ca', flag: 'https://flagcdn.com/w40/ca.png', name: 'Canada',      price: '$0.08' },
  { code: 'gb', flag: 'https://flagcdn.com/w40/gb.png', name: 'UK',          price: '$0.15' },
  { code: 'de', flag: 'https://flagcdn.com/w40/de.png', name: 'Germany',     price: '$0.12' },
  { code: 'fr', flag: 'https://flagcdn.com/w40/fr.png', name: 'France',      price: '$0.12' },
  { code: 'br', flag: 'https://flagcdn.com/w40/br.png', name: 'Brazil',      price: '$0.10' },
  { code: 'in', flag: 'https://flagcdn.com/w40/in.png', name: 'India',       price: '$0.07' },
  { code: 'ru', flag: 'https://flagcdn.com/w40/ru.png', name: 'Russia',      price: '$0.06' },
  { code: 'ua', flag: 'https://flagcdn.com/w40/ua.png', name: 'Ukraine',     price: '$0.08' },
  { code: 'tr', flag: 'https://flagcdn.com/w40/tr.png', name: 'Turkey',      price: '$0.09' },
  { code: 'mx', flag: 'https://flagcdn.com/w40/mx.png', name: 'Mexico',      price: '$0.10' },
]

const services = [
  { Icon: FaLinkedin, name: 'LinkedIn',    price: '$0.18', color: '#0A66C2' },
  { Icon: FaWhatsapp, name: 'WhatsApp',    price: '$0.09', color: '#25D366' },
  { Icon: FaTelegram, name: 'Telegram',    price: '$0.07', color: '#0088cc' },
  { Icon: FaGoogle,   name: 'Google',      price: '$0.05', color: '#EA4335' },
  { Icon: FaFacebook, name: 'Facebook',    price: '$0.08', color: '#1877F2' },
  { Icon: FaTwitter,  name: 'Twitter',     price: '$0.06', color: '#1DA1F2' },
  { Icon: FaYoutube,  name: 'YouTube',     price: '$0.10', color: '#FF0000' },
  { Icon: FaAmazon,   name: 'Amazon',      price: '$0.12', color: '#FF9900' },
  { Icon: FaPaypal,   name: 'PayPal',      price: '$0.15', color: '#003087' },
  { Icon: FaEnvelope, name: 'Gmail',       price: '$0.04', color: '#EA4335' },
  { Icon: SiEbay,     name: 'eBay',        price: '$0.14', color: '#E53238' },
  { Icon: SiVk,       name: 'VK',          price: '$0.08', color: '#0077FF' },
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
    <section className={styles.section} id="sms-online">
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
                  <img src={c.flag} alt={c.name} className={styles.flagIcon} />
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
                  <s.Icon size={18} color={s.color} className={styles.serviceIcon} />
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
