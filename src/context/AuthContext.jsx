import { createContext, useContext, useEffect, useState } from 'react'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [theme, setTheme] = useState('light')

  // Load auth + theme from localStorage
  useEffect(() => {
    const savedUser = localStorage.getItem('skill-swap:user')
    const savedTheme = localStorage.getItem('skill-swap:theme')
    if (savedUser) setUser(JSON.parse(savedUser))
    if (savedTheme) setTheme(savedTheme)
  }, [])

  // Persist auth
  useEffect(() => {
    if (user) localStorage.setItem('skill-swap:user', JSON.stringify(user))
    else localStorage.removeItem('skill-swap:user')
  }, [user])

  // Theme toggling via root class
  useEffect(() => {
    const root = document.documentElement
    if (theme === 'dark') root.classList.add('dark')
    else root.classList.remove('dark')
    localStorage.setItem('skill-swap:theme', theme)
  }, [theme])

  const login = (email, password) => {
    // Mock auth: accept any non-empty email/password
    if (email && password) {
      const mockUser = { email, name: email.split('@')[0] }
      setUser(mockUser)
      return { ok: true }
    }
    return { ok: false, error: 'Invalid credentials' }
  }

  const signup = (name, email, password) => {
    if (name && email && password) {
      const mockUser = { email, name }
      setUser(mockUser)
      return { ok: true }
    }
    return { ok: false, error: 'Please fill all fields' }
  }

  const logout = () => setUser(null)

  const toggleTheme = () => setTheme((t) => (t === 'light' ? 'dark' : 'light'))

  const isAuthenticated = !!user

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated, login, signup, logout, theme, toggleTheme }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
