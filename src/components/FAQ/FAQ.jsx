import { useState } from 'react'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'
import styles from './FAQ.module.css'

const faqs = [
  {
    q: 'What is the SMS verification service?',
    a: 'Virtual phone number texting service allows you to receive a confirmation code to register on any site that requires you to verify your phone number. Thanks to special equipment we have installed in our office and our software, anyone can get a virtual number to receive SMS in minutes.',
  },
  {
    q: 'What is a virtual number?',
    a: 'A virtual number is a telephone number that is not tied to a specific phone line or device. It is used solely to receive SMS messages for verifying accounts on websites and apps.',
  },
  {
    q: 'Do I need a SIM card to use my virtual number?',
    a: 'No SIM card is required. Everything happens online — you receive the SMS directly in your TempNumber Pro account dashboard.',
  },
  {
    q: 'Will someone have access to my number after my rent is up?',
    a: 'After the rental period expires, the number is returned to the pool and may be reused. We recommend not using rented numbers for long-term account security.',
  },
  {
    q: 'What does it mean to receive SMS from website online?',
    a: 'It means you get a temporary virtual phone number that receives text messages online, visible directly in your browser — no physical phone needed.',
  },
  {
    q: 'What do I do if I can\'t buy a virtual number?',
    a: 'Try refreshing the page and selecting a different country or service. If the issue persists, contact our 24/7 support team via the chat widget.',
  },
  {
    q: 'Can I get a text message for free?',
    a: 'Some numbers may be available at very low prices. Check our pricing page for current promotions. Free numbers are not currently offered, but prices start as low as $0.05.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState(0)

  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.heading}>Frequently Asked Questions</h2>
        <div className={styles.list}>
          {faqs.map((faq, i) => (
            <div key={i} className={`${styles.item} ${open === i ? styles.active : ''}`}>
              <button
                className={styles.question}
                onClick={() => setOpen(open === i ? -1 : i)}
              >
                <span>{faq.q}</span>
                {open === i
                  ? <FiChevronUp size={18} className={styles.chevron} />
                  : <FiChevronDown size={18} className={styles.chevron} />
                }
              </button>
              <div className={`${styles.answer} ${open === i ? styles.answerOpen : ''}`}>
                <p>{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
