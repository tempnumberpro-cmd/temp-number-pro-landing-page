import { FaGithub, FaFacebook, FaTwitter, FaGoogle } from 'react-icons/fa'
import styles from './SignUpBanner.module.css'

export default function SignUpBanner() {
  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.heading}>Sign Up</h2>
        <div className={styles.formRow}>
          <input type="email" placeholder="Enter email" className={styles.input} />
          <input type="password" placeholder="Create password" className={styles.input} />
          <button className={styles.btn}>Sign Up</button>
        </div>
        <p className={styles.orText}>Or log in with your social network</p>
        <div className={styles.socialRow}>
          <button className={`${styles.socialBtn} ${styles.github}`}><FaGithub size={18} /></button>
          <button className={`${styles.socialBtn} ${styles.facebook}`}><FaFacebook size={18} /></button>
          <button className={`${styles.socialBtn} ${styles.twitter}`}><FaTwitter size={18} /></button>
          <button className={`${styles.socialBtn} ${styles.google}`}><FaGoogle size={18} /></button>
        </div>
      </div>
    </section>
  )
}
