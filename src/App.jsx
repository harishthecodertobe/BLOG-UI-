import { useState, useMemo } from 'react'
import Navbar from './components/Navbar'
import SearchBar from './components/SearchBar'
import Filter from './components/Filter'
import BlogList from './components/BlogList'
import postsData from './data/posts.json'
import './App.css'

const ALL_CATEGORIES = 'All'

function App() {
  // Search text typed by the user.
  const [searchTerm, setSearchTerm] = useState('')
  // Currently selected category filter. Starts on "All" so every
  // post is visible by default.
  const [activeCategory, setActiveCategory] = useState(ALL_CATEGORIES)

  // Build the category pill list dynamically from posts.json instead
  // of hardcoding it, so adding a new category to the data file is
  // all it takes for a new filter pill to appear.
  const categories = useMemo(() => {
    const uniqueCategories = [...new Set(postsData.map((post) => post.category))]
    return [ALL_CATEGORIES, ...uniqueCategories.sort()]
  }, [])

  // Search and filter combined: a post must match BOTH the typed
  // search term (case-insensitive, title only) AND the selected
  // category (or the category filter is set to "All").
  const filteredPosts = useMemo(() => {
    return postsData.filter((post) => {
      const matchesSearch = post.title
        .toLowerCase()
        .includes(searchTerm.trim().toLowerCase())
      const matchesCategory =
        activeCategory === ALL_CATEGORIES || post.category === activeCategory
      return matchesSearch && matchesCategory
    })
  }, [searchTerm, activeCategory])

  const hasActiveFilters = searchTerm !== '' || activeCategory !== ALL_CATEGORIES

  const handleClearFilters = () => {
    setSearchTerm('')
    setActiveCategory(ALL_CATEGORIES)
  }

  return (
    <>
      <Navbar />

      <section className="hero">
        <div className="hero-inner">
          <p className="hero-eyebrow">Volume 04 — Summer Edition</p>
          <h1 className="hero-heading">
            Stories worth <span className="hero-accent">slowing down</span> for.
          </h1>
          <p className="hero-subheading">
            A small, honest blog on code, travel, food, and everything in
            between — written by people who actually did the thing.
          </p>
        </div>
      </section>

      <main className="main">
        <div className="controls">
          <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
          <button
            type="button"
            className="clear-button"
            onClick={handleClearFilters}
            disabled={!hasActiveFilters}
          >
            Clear Filters
          </button>
        </div>

        <Filter
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        <p className="results-count">
          {filteredPosts.length} post{filteredPosts.length !== 1 ? 's' : ''} found
        </p>

        <BlogList posts={filteredPosts} />
      </main>

      <footer className="footer">
        <p>The Notebook — a mini React project, built for learning.</p>
      </footer>
    </>
  )
}

export default App
