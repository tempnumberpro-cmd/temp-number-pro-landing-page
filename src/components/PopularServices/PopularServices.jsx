import {
  FaAmazon,
  FaEnvelope,
  FaFacebook,
  FaGoogle,
  FaLinkedin,
  FaPaypal,
  FaShoppingCart,
  FaTelegram,
  FaTwitter,
  FaWhatsapp,
  FaYoutube,
} from 'react-icons/fa'
import { SiEbay } from 'react-icons/si'
import styles from './PopularServices.module.css'

const rows = [
  {
    flag: 'https://flagcdn.com/w40/co.png',
    country: 'Colombia',
    service: 'WhatsApp',
    Icon: FaWhatsapp,
    color: '#25D366',
    activated: '4910 times',
    cost: '$0.12',
  },
  {
    flag: 'https://flagcdn.com/w40/us.png',
    country: 'USA',
    service: 'Telegram',
    Icon: FaTelegram,
    color: '#0088cc',
    activated: '2694 times',
    cost: '$0.07',
  },
  {
    flag: 'https://flagcdn.com/w40/br.png',
    country: 'Brazil',
    service: 'Google',
    Icon: FaGoogle,
    color: '#EA4335',
    activated: '2556 times',
    cost: '$0.13',
  },
  {
    flag: 'https://flagcdn.com/w40/th.png',
    country: 'Thailand',
    service: 'LinkedIn',
    Icon: FaLinkedin,
    color: '#0A66C2',
    activated: '367 times',
    cost: '$0.18',
  },
  {
    flag: 'https://flagcdn.com/w40/br.png',
    country: 'Brazil',
    service: 'YouTube',
    Icon: FaYoutube,
    color: '#FF0000',
    activated: '253 times',
    cost: '$0.10',
  },
  {
    flag: 'https://flagcdn.com/w40/in.png',
    country: 'India',
    service: 'Amazon',
    Icon: FaAmazon,
    color: '#FF9900',
    activated: '244 times',
    cost: '$0.12',
  },
  {
    flag: 'https://flagcdn.com/w40/ph.png',
    country: 'Philippines',
    service: 'PayPal',
    Icon: FaPaypal,
    color: '#003087',
    activated: '238 times',
    cost: '$0.15',
  },
  {
    flag: 'https://flagcdn.com/w40/in.png',
    country: 'India',
    service: 'Gmail',
    Icon: FaEnvelope,
    color: '#EA4335',
    activated: '208 times',
    cost: '$0.04',
  },
  {
    flag: 'https://flagcdn.com/w40/ng.png',
    country: 'Nigeria',
    service: 'Twitter',
    Icon: FaTwitter,
    color: '#1DA1F2',
    activated: '207 times',
    cost: '$0.06',
  },
  {
    flag: 'https://flagcdn.com/w40/ae.png',
    country: 'United Arab...',
    service: 'Facebook',
    Icon: FaFacebook,
    color: '#1877F2',
    activated: '161 times',
    cost: '$0.12',
  },
  {
    flag: 'https://flagcdn.com/w40/pk.png',
    country: 'Pakistan',
    service: 'Walmart',
    Icon: FaShoppingCart,
    color: '#0071ce',
    activated: '147 times',
    cost: '$0.61',
  },
  {
    flag: 'https://flagcdn.com/w40/gb.png',
    country: 'UK',
    service: 'eBay',
    Icon: SiEbay,
    color: '#E53238',
    activated: '132 times',
    cost: '$0.14',
  },
]

export default function PopularServices() {
  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.heading}>Most popular services today</h2>

        <div className={styles.card}>
          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Country</th>
                  <th>Service</th>
                  <th>Activated</th>
                  <th>Cost</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r, i) => (
                  <tr key={`${r.country}-${r.service}-${i}`} className={styles.row}>
                    <td>
                      <span className={styles.flagCell}>
                        <img src={r.flag} alt={r.country} className={styles.flagIcon} />
                        {r.country}
                      </span>
                    </td>
                    <td>
                      <span className={styles.serviceCell}>
                        <r.Icon size={18} color={r.color} className={styles.serviceIcon} />
                        {r.service}
                      </span>
                    </td>
                    <td className={styles.activatedCell}>{r.activated}</td>
                    <td className={styles.costCell}>{r.cost}</td>
                    <td>
                      <button className={styles.receiveBtn}>Receive SMS</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}
