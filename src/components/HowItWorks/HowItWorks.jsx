import { FiMessageSquare, FiMonitor, FiSmartphone } from 'react-icons/fi'
import styles from './HowItWorks.module.css'

const steps = [
  {
    num: 1,
    title: 'Get your number in your personal cabinet',
    desc: 'To register with TEMP NUMBER PRO you only need to enter your email address. No ID information or other contacts.',
    align: 'left',
    Icon: FiMonitor,
  },
  {
    num: 2,
    title: 'Enter your phone number when signing up online',
    desc: 'We support 1500+ of the most popular social networks, messengers, marketplaces and web sites.',
    align: 'right',
    Icon: FiSmartphone,
  },
  {
    num: 3,
    title: 'You receive an SMS in your personal profile',
    desc: 'You enter the verification code you received on the site. From $0.05 per activation. The number of numbers and activations is unlimited.',
    align: 'left',
    Icon: FiMessageSquare,
  },
]

export default function HowItWorks() {
  return (
    <section className={styles.section} id="how-it-works">
      <div className="container">
        <h2 className={styles.heading}>
          Registration on the sites without SMS to<br />
          your personal number in 3 steps
        </h2>

        <div className={styles.steps}>
          {steps.map((step, idx) => (
            <div key={step.num} className={`${styles.stepRow} ${step.align === 'right' ? styles.reverse : ''}`}>
              {/* Text */}
              <div className={styles.textCol}>
                <div className={styles.stepNum}>{step.num}</div>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.desc}</p>
              </div>

              {/* Arrow decoration */}
              {idx < steps.length - 1 && (
                <div className={styles.arrow}>
                  <svg width="60" height="40" viewBox="0 0 60 40" fill="none">
                    <path d="M5 5 Q30 0 55 35" stroke="#f59e0b" strokeWidth="2.5"
                          strokeLinecap="round" fill="none" strokeDasharray="4 2"/>
                    <path d="M48 38 L55 35 L52 28" stroke="#f59e0b" strokeWidth="2.5"
                          strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                  </svg>
                </div>
              )}

              {/* Illustration */}
              <div className={styles.illustCol}>
                <div className={styles.illustCircle}>
                  <step.Icon size={56} className={styles.illustEmoji} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
