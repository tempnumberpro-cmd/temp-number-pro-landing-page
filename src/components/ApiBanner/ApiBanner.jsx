import { FiLink, FiArrowRight } from 'react-icons/fi'
import styles from './ApiBanner.module.css'

export default function ApiBanner() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.banner}>
          <div className={styles.iconWrap}>
            <FiLink size={28} />
          </div>
          <div className={styles.text}>
            <h3 className={styles.title}>Connect via API</h3>
            <p className={styles.desc}>Receive SMS verification in bulk and automate your work</p>
          </div>
          <a href="#" className={styles.link}>
            Read more... <FiArrowRight size={14} />
          </a>
        </div>
      </div>
    </section>
  )
}
