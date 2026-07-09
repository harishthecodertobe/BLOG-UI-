import BlogCard from './BlogCard'
import EmptyState from './EmptyState'
import styles from './BlogList.module.css'

/**
 * Renders the responsive grid of post cards.
 * Receives the already-filtered array of posts as a prop —
 * BlogList doesn't know or care *how* filtering happened,
 * it just maps whatever it's given.
 */
function BlogList({ posts }) {
  if (posts.length === 0) {
    return <EmptyState />
  }

  return (
    <div className={styles.grid}>
      {posts.map((post) => (
        <BlogCard key={post.id} post={post} />
      ))}
    </div>
  )
}

export default BlogList
