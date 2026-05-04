import { FiArrowRight, FiAward, FiUsers, FiTrendingUp } from 'react-icons/fi'
import styles from './ReferralProgram.module.css'

const benefits = [
  {
    icon: FiUsers,
    title: 'Easy Sharing',
    description: 'Share your referral link with friends and earn instantly',
  },
  {
    icon: FiTrendingUp,
    title: 'Passive Income',
    description: 'Get 20% commission on every successful referral',
  },
  {
    icon: FiAward,
    title: 'Lifetime Rewards',
    description: 'Earn commissions from your referrals forever',
  },
]

export default function ReferralProgram() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.left}>
            <span className={styles.badge}>AFFILIATE PROGRAM</span>
            <h2 className={styles.title}>Earn Money With TempNumber Pro</h2>
            <p className={styles.description}>
              Join our referral program and start earning passive income by sharing TempNumber Pro with your network. It's easy, rewarding, and completely free to join.
            </p>

            <div className={styles.stats}>
              <div className={styles.stat}>
                <div className={styles.statNumber}>20%</div>
                <div className={styles.statLabel}>Commission</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statNumber}>∞</div>
                <div className={styles.statLabel}>Lifetime Earnings</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statNumber}>$0</div>
                <div className={styles.statLabel}>Join Cost</div>
              </div>
            </div>

            <button className={styles.ctaBtn}>
              Join Now <FiArrowRight size={16} />
            </button>
          </div>

          <div className={styles.right}>
            <div className={styles.benefitsGrid}>
              {benefits.map((benefit, i) => {
                const Icon = benefit.icon
                return (
                  <div key={i} className={styles.benefitCard}>
                    <div className={styles.benefitIcon}>
                      <Icon size={24} />
                    </div>
                    <h3 className={styles.benefitTitle}>{benefit.title}</h3>
                    <p className={styles.benefitDesc}>{benefit.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
