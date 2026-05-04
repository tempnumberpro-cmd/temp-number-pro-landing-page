import styles from './VirtualNumberDesc.module.css'
import { FaGithub, FaFacebook, FaTwitter, FaGoogle } from 'react-icons/fa'

export default function VirtualNumberDesc() {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.inner}`}>
        {/* Left: Chat illustration */}
        <div className={styles.left}>
          <div className={styles.chatWrap}>
            <div className={styles.phone2}>
              <div className={styles.chatBubble1}>Hey, what's your number?</div>
              <div className={styles.chatBubble2}>Use TempNumber Pro 😊</div>
              <div className={styles.chatBubble1}>It's verified! ✓✓</div>
            </div>
          </div>
        </div>

        {/* Right: Text + Sign Up form card */}
        <div className={styles.right}>
          <div className={styles.textBlock}>
            <p>TempNumber Pro allows you to buy a virtual number for registering with popular services at the best price online. Previously, in order to register an additional account on a social network or messenger, you had to get a new SIM card or ask your partner to share their phone.</p>
            <p>First of all, it costs money to get a new SIM card. Secondly, it is a whole event — to come to the office, fill out a form with passport data...</p>
            <p className={styles.highlight}>On this site you can buy a virtual phone number for Telegram, WhatsApp, Viber, Instagram, Facebook, and any other popular platform from just 0.05$.</p>
            <p>Get a virtual phone number in just a few minutes!</p>
          </div>

          {/* Sign Up Card */}
          <div className={styles.signUpCard}>
            <h3 className={styles.cardTitle}>Sign Up</h3>
            <input type="email" placeholder="Enter email" className={styles.input} />
            <input type="password" placeholder="Create password" className={styles.input} />
            <button className={styles.signUpBtn}>Sign Up</button>
            <p className={styles.signIn}>Already have an account? <a href="#" className={styles.signInLink}>Sign in.</a></p>
            <p className={styles.orText}>Or log in with your social network</p>
            <div className={styles.socialRow}>
              <button className={`${styles.socialBtn} ${styles.github}`}><FaGithub size={16} /></button>
              <button className={`${styles.socialBtn} ${styles.facebook}`}><FaFacebook size={16} /></button>
              <button className={`${styles.socialBtn} ${styles.twitter}`}><FaTwitter size={16} /></button>
              <button className={`${styles.socialBtn} ${styles.google}`}><FaGoogle size={16} /></button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
