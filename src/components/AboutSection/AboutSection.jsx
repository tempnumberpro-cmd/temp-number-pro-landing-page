import styles from './AboutSection.module.css'

export default function AboutSection() {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.inner}`}>
        {/* Left: Tablet illustration */}
        <div className={styles.left}>
          <div className={styles.tabletWrap}>
            <div className={styles.tablet}>
              <div className={styles.tabletScreen}>
                <div className={styles.tabletHeader} />
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className={styles.tabletRow}>
                    <div className={styles.tabletFlag} />
                    <div className={styles.tabletBar} style={{ width: `${85 - i * 10}%` }} />
                    <div className={styles.tabletBtn} />
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.tabletCircle} />
          </div>
        </div>

        {/* Right: Text */}
        <div className={styles.right}>
          <h2 className={styles.heading}>
            TEMP NUMBER PRO - service for private registration at online resources
          </h2>
          <p className={styles.text}>
            We give you the opportunity to anonymously use the phone number online to
            receive SMS to register on sites and applications.
          </p>
          <p className={styles.text}>
            At the same time, you can be sure that no one but you will have access to it.
          </p>
        </div>
      </div>
    </section>
  )
}
