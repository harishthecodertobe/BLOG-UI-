import styles from './EmptyState.module.css'

/**
 * Shown when search + filter combine to match zero posts.
 * Purely presentational, no props required.
 */
function EmptyState() {
  return (
    <div className={styles.wrapper}>
      <span className={styles.mark}>✎</span>
      <h3 className={styles.heading}>No Posts Found</h3>
      <p className={styles.text}>
        Nothing matches your search and filter combination. Try a different
        keyword or clear your filters.
      </p>
    </div>
  )
}

export default EmptyState
