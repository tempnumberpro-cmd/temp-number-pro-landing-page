import styles from './PopularServices.module.css'

const rows = [
  { flag: '🇨🇴', country: 'Colombia',     service: '🔍 Google',    activated: '4910 times', cost: '$0.12' },
  { flag: '🇺🇸', country: 'USA',           service: '🛒 Walmart',   activated: '2694 times', cost: '$0.61' },
  { flag: '🇧🇷', country: 'Brazil',        service: '🔍 Google',    activated: '2556 times', cost: '$0.13' },
  { flag: '🇹🇭', country: 'Thailand',      service: '📦 Amazon',    activated: '367 times',  cost: '$0.14' },
  { flag: '🇧🇷', country: 'Brazil',        service: '👤 Facebook',  activated: '253 times',  cost: '$0.12' },
  { flag: '🇮🇳', country: 'India',         service: '📦 Amazon',    activated: '244 times',  cost: '$0.12' },
  { flag: '🇵🇭', country: 'Philippines',   service: '👤 Facebook',  activated: '238 times',  cost: '$0.13' },
  { flag: '🇮🇳', country: 'India',         service: '👤 Facebook',  activated: '208 times',  cost: '$0.12' },
  { flag: '🇳🇬', country: 'Nigeria',       service: '👤 Facebook',  activated: '207 times',  cost: '$0.12' },
  { flag: '🇦🇪', country: 'United Arab...', service: '📦 Amazon',   activated: '161 times',  cost: '$0.12' },
]

export default function PopularServices() {
  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.heading}>Most popular services today</h2>

        <div className={styles.card}>
          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Country</th>
                  <th>Service</th>
                  <th>Activated</th>
                  <th>Cost</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r, i) => (
                  <tr key={i} className={styles.row}>
                    <td>
                      <span className={styles.flagCell}>
                        <span>{r.flag}</span>
                        {r.country}
                      </span>
                    </td>
                    <td className={styles.serviceCell}>{r.service}</td>
                    <td className={styles.activatedCell}>{r.activated}</td>
                    <td className={styles.costCell}>{r.cost}</td>
                    <td>
                      <button className={styles.receiveBtn}>Receive SMS</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}
