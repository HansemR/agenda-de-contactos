import { useEffect, useState } from 'react'

function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark'
  })

  useEffect(() => {
    const body = document.body
    if (darkMode) {
      body.classList.add('dark-theme')
      body.classList.remove('light-theme')
    } else {
      body.classList.add('light-theme')
      body.classList.remove('dark-theme')
    }
    localStorage.setItem('theme', darkMode ? 'dark' : 'light')
  }, [darkMode])

  const handleToggle = () => {
    setDarkMode(prev => !prev)
  }

  return (
    <button onClick={handleToggle} className="theme-toggle">
      Cambiar a modo {darkMode ? 'claro' : 'oscuro'}
    </button>
  )
}

export default ThemeToggle
