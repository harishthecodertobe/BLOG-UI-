import styles from './SearchBar.module.css'

/**
 * Controlled search input.
 * The parent (App) owns the search text state — this component
 * just renders the input and reports every keystroke upward
 * via onSearchChange, which is what makes the search feel "real time".
 */
function SearchBar({ searchTerm, onSearchChange }) {
  return (
    <div className={styles.wrapper}>
      <svg
        className={styles.icon}
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
        <line
          x1="16.5"
          y1="16.5"
          x2="21"
          y2="21"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
      <input
        type="text"
        className={styles.input}
        placeholder="Search posts by title..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        aria-label="Search blog posts by title"
      />
    </div>
  )
}

export default SearchBar
