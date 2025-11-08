import React, { useState } from 'react'
import ProductList from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'

const App = () => {
  // Dark mode state
  const [isDarkMode, setIsDarkMode] = useState(false)

  // Cart management state - stores an array of product objects
  const [cartItems, setCartItems] = useState([])

  // Category filtering state - tracks which category is selected
  const [selectedCategory, setSelectedCategory] = useState('all')

  // Toggle dark mode function
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }

  // Add item to cart function - takes a product object and adds it to cartItems array
  const addToCart = (product) => {
    setCartItems([...cartItems, product])
  }

  // Handle category change - updates selectedCategory when dropdown changes
  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value)
  }

  return (
    <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
      <h1>🛒 Shopping App</h1>
      <p>
        Welcome! Your task is to implement filtering, cart management, and dark
        mode.
      </p>

      <DarkModeToggle isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />

      <label>Filter by Category: </label>
      <select value={selectedCategory} onChange={handleCategoryChange}>
        <option value="all">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Dairy">Dairy</option>
      </select>

      <ProductList addToCart={addToCart} selectedCategory={selectedCategory} />

      <Cart cartItems={cartItems} />
    </div>
  )
}

export default App
