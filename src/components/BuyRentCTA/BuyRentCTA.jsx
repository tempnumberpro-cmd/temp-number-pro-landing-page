import styles from './BuyRentCTA.module.css'

export default function BuyRentCTA() {
  return (
    <section className={styles.section} id="rent">
      <div className={`container ${styles.inner}`}>
        {/* Yellow arrow decoration */}
        <div className={styles.arrow}>
          <svg width="80" height="48" viewBox="0 0 80 48" fill="none">
            <path d="M5 5 Q40 2 75 43" stroke="#f59e0b" strokeWidth="2.5"
                  strokeLinecap="round" fill="none"/>
            <path d="M68 46 L75 43 L70 36" stroke="#f59e0b" strokeWidth="2.5"
                  strokeLinecap="round" strokeLinejoin="round" fill="none"/>
          </svg>
        </div>
        <div className={styles.btns}>
          <button className={styles.btnBlue}>Buy a one-time number</button>
          <button className={styles.btnDark}>Rent number</button>
        </div>
      </div>
    </section>
  )
}
