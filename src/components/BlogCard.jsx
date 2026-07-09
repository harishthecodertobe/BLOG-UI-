import { useState } from 'react'
import styles from './BlogCard.module.css'

/**
 * A single blog post card.
 * Receives one `post` object via props and renders it.
 * Holds its own tiny bit of local state (isExpanded) since
 * whether THIS card is expanded has no effect on any other
 * card or on App — a good candidate for local state rather
 * than lifting it up.
 */
function BlogCard({ post }) {
  const [isExpanded, setIsExpanded] = useState(false)

  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })

  return (
    <article className={styles.card}>
      <div className={styles.stamp}>{post.category}</div>

      <h3 className={styles.title}>{post.title}</h3>

      <div className={styles.meta}>
        <span className={styles.author}>By {post.author}</span>
        <span className={styles.divider}>·</span>
        <time className={styles.date} dateTime={post.date}>
          {formattedDate}
        </time>
      </div>

      <p className={styles.description}>{post.description}</p>

      {isExpanded && <p className={styles.content}>{post.content}</p>}

      <button
        type="button"
        className={styles.readMore}
        onClick={() => setIsExpanded((prev) => !prev)}
        aria-expanded={isExpanded}
      >
        {isExpanded ? 'Show Less' : 'Read More'}
        <span className={styles.arrow}>{isExpanded ? '↑' : '→'}</span>
      </button>
    </article>
  )
}

export default BlogCard
