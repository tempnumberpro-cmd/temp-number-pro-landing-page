import { FiHeadphones, FiMessageCircle, FiUsers, FiMonitor } from 'react-icons/fi'
import { FaTelegramPlane } from 'react-icons/fa'
import styles from './FeaturesGrid.module.css'

const features = [
  {
    icon: <FiHeadphones size={28} />,
    color: '#3b82f6',
    title: '24/7 Support',
    desc: 'Any questions? Our manager is always ready to help you.',
  },
  {
    icon: <FaTelegramPlane size={28} />,
    color: '#0088cc',
    title: 'Telegram bot',
    desc: 'Receive SMS through the Telegram bot — fast and convenient.',
  },
  {
    icon: <FiUsers size={28} />,
    color: '#8b5cf6',
    title: 'Group Chat',
    desc: "We've created a special group chat for our customers.",
  },
  {
    icon: <FiMonitor size={28} />,
    color: '#1e293b',
    title: 'Get SMS on desktop!',
    desc: 'We made a special solution for desktop users.',
  },
]

export default function FeaturesGrid() {
  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.heading}>Online SMS receive service for your convenience</h2>
        <div className={styles.grid}>
          {features.map((f) => (
            <div key={f.title} className={styles.card}>
              <div className={styles.iconWrap} style={{ background: f.color + '18', color: f.color }}>
                {f.icon}
              </div>
              <h3 className={styles.cardTitle}>{f.title}</h3>
              <p className={styles.cardDesc}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
