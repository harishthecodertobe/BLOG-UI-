import styles from './Filter.module.css'

/**
 * Category filter rendered as a row of pill buttons.
 * `categories` is generated dynamically in App.jsx from posts.json,
 * so this component never hardcodes category names.
 */
function Filter({ categories, activeCategory, onCategoryChange }) {
  return (
    <div className={styles.wrapper} role="group" aria-label="Filter posts by category">
      {categories.map((category) => (
        <button
          key={category}
          type="button"
          className={`${styles.pill} ${activeCategory === category ? styles.active : ''}`}
          onClick={() => onCategoryChange(category)}
        >
          {category}
        </button>
      ))}
    </div>
  )
}

export default Filter
