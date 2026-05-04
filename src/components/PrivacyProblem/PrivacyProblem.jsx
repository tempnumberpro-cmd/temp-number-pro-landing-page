import styles from './PrivacyProblem.module.css'

export default function PrivacyProblem() {
  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.heading}>
          It's no secret that almost all online services<br />
          are selling your personal data.
        </h2>

        <div className={styles.cards}>
          {/* Card 1 */}
          <div className={styles.card}>
            <div className={styles.cardIllustration}>
              <div className={styles.buyNow}>
                <span>BUY NOW!</span>
              </div>
              <div className={styles.handIcon}>🛍️</div>
            </div>
            <h3 className={styles.cardTitle}>Have you registered on Facebook?</h3>
            <p className={styles.cardText}>
              You immediately receive an avalanche of <span className={styles.highlight}>targeted advertising.</span>
            </p>
          </div>

          {/* Card 2 */}
          <div className={styles.card}>
            <div className={styles.cardIllustration}>
              <div className={styles.officeIcon}>💼</div>
            </div>
            <h3 className={styles.cardTitle}>Post an ad on Craigslist?</h3>
            <p className={styles.cardText}>
              Expect a lot of spam calls with offers to arrange a loan!
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className={styles.ctaRow}>
          <div className={styles.emojiLeft}>😢</div>
          <div className={styles.bubble}>Can we not do this?</div>
          <div className={styles.yesGroup}>
            <div className={styles.yesBubble}>YES!</div>
            <div className={styles.emojiRight}>😊</div>
          </div>
        </div>
      </div>
    </section>
  )
}
