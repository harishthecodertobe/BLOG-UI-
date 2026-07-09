import styles from './Navbar.module.css'

/**
 * Sticky top navigation bar.
 * Purely presentational — no props needed since it doesn't
 * depend on any dynamic state from App.
 */
function Navbar() {
  return (
    <header className={styles.navbar}>
      <div className={styles.inner}>
        <span className={styles.logo}>
          The Notebook<span className={styles.dot}>.</span>
        </span>
        <span className={styles.tagline}>Field notes, published weekly</span>
      </div>
    </header>
  )
}

export default Navbar
