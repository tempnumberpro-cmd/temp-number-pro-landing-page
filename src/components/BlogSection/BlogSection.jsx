import { FiArrowRight, FiCalendar, FiUser } from 'react-icons/fi'
import styles from './BlogSection.module.css'

const blogPosts = [
  {
    id: 1,
    title: 'How to Secure Your Online Accounts',
    excerpt: 'Learn best practices for protecting your privacy while registering online services.',
    date: 'May 3, 2024',
    author: 'Alex Chen',
    category: 'Security',
    image: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  },
  {
    id: 2,
    title: 'SMS Verification: Why It Matters',
    excerpt: 'Understand the importance of two-factor authentication in modern cybersecurity.',
    date: 'May 1, 2024',
    author: 'Sarah Johnson',
    category: 'Technology',
    image: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
  },
  {
    id: 3,
    title: 'Privacy Tips for Social Media Users',
    excerpt: 'Protect your personal information while enjoying social media platforms.',
    date: 'Apr 28, 2024',
    author: 'Mike Taylor',
    category: 'Privacy',
    image: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
  },
]

export default function BlogSection() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>Latest from Our Blog</h2>
          <p className={styles.subtitle}>
            Stay informed with insights on security, privacy, and online protection
          </p>
        </div>

        <div className={styles.grid}>
          {blogPosts.map((post) => (
            <article key={post.id} className={styles.card}>
              <div 
                className={styles.imageWrapper}
                style={{ background: post.image }}
              >
                <div className={styles.categoryBadge}>{post.category}</div>
              </div>

              <div className={styles.content}>
                <h3 className={styles.cardTitle}>{post.title}</h3>
                <p className={styles.excerpt}>{post.excerpt}</p>

                <div className={styles.meta}>
                  <div className={styles.metaItem}>
                    <FiCalendar size={14} />
                    <span>{post.date}</span>
                  </div>
                  <div className={styles.metaItem}>
                    <FiUser size={14} />
                    <span>{post.author}</span>
                  </div>
                </div>

                <a href="#" className={styles.readMore}>
                  Read Article <FiArrowRight size={14} />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className={styles.footer}>
          <a href="#" className={styles.viewAllBtn}>
            View All Articles <FiArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}
