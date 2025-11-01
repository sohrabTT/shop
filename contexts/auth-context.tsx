"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from "react"
import { User, AuthContextType } from "@/lib/types"

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  // Check authentication status on mount
  useEffect(() => {
    checkAuth()
  }, [])

  const checkAuth = () => {
    try {
      const savedAuth = localStorage.getItem('user')
      if (savedAuth) {
        const userData = JSON.parse(savedAuth)
        setUser(userData)
        setIsAuthenticated(true)
      }
    } catch (error) {
      console.error('Error checking auth:', error)
      localStorage.removeItem('user')
    } finally {
      setIsLoading(false)
    }
  }

  const login = async (email: string, password: string): Promise<{ success: boolean; message: string }> => {
    setIsLoading(true)
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Demo credentials
      const demoUsers = [
        {
          id: "1",
          name: "علی احمدی",
          email: "ali@example.com",
          password: "123456",
          avatar: "/placeholder-user.jpg",
          phone: "09123456789",
          address: "تهران، خیابان ولیعصر",
          isAdmin: true,
          createdAt: "2024-01-01",
          lastLogin: new Date().toISOString()
        },
        {
          id: "2",
          name: "فاطمه رضایی",
          email: "fateme@example.com",
          password: "123456",
          avatar: "/placeholder-user.jpg",
          phone: "09187654321",
          address: "اصفهان، خیابان چهارباغ",
          isAdmin: false,
          createdAt: "2024-01-15",
          lastLogin: new Date().toISOString()
        }
      ]

      const foundUser = demoUsers.find(u => u.email === email && u.password === password)
      
      if (foundUser) {
        const { password: _, ...userWithoutPassword } = foundUser
        setUser(userWithoutPassword as User)
        setIsAuthenticated(true)
        localStorage.setItem('user', JSON.stringify(userWithoutPassword))
        
        return { success: true, message: "ورود با موفقیت انجام شد" }
      } else {
        return { success: false, message: "ایمیل یا رمز عبور اشتباه است" }
      }
    } catch (error) {
      return { success: false, message: "خطا در ورود. لطفاً مجدداً تلاش کنید" }
    } finally {
      setIsLoading(false)
    }
  }

  const register = async (name: string, email: string, password: string): Promise<{ success: boolean; message: string }> => {
    setIsLoading(true)
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Check if user already exists
      const savedUsers = localStorage.getItem('registeredUsers')
      const users = savedUsers ? JSON.parse(savedUsers) : []
      
      if (users.find((u: any) => u.email === email)) {
        return { success: false, message: "این ایمیل قبلاً ثبت شده است" }
      }
      
      // Create new user
      const newUser: User = {
        id: Date.now().toString(),
        name,
        email,
        avatar: "/placeholder-user.jpg",
        isAdmin: false,
        createdAt: new Date().toISOString(),
        lastLogin: new Date().toISOString()
      }
      
      // Save to local storage for demo
      users.push({ ...newUser, password })
      localStorage.setItem('registeredUsers', JSON.stringify(users))
      
      // Auto login after registration
      setUser(newUser)
      setIsAuthenticated(true)
      localStorage.setItem('user', JSON.stringify(newUser))
      
      return { success: true, message: "ثبت‌نام با موفقیت انجام شد" }
    } catch (error) {
      return { success: false, message: "خطا در ثبت‌نام. لطفاً مجدداً تلاش کنید" }
    } finally {
      setIsLoading(false)
    }
  }

  const logout = () => {
    setUser(null)
    setIsAuthenticated(false)
    localStorage.removeItem('user')
  }

  const updateProfile = async (userData: Partial<User>): Promise<{ success: boolean; message: string }> => {
    setIsLoading(true)
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 500))
      
      if (user) {
        const updatedUser = { ...user, ...userData }
        setUser(updatedUser)
        localStorage.setItem('user', JSON.stringify(updatedUser))
        return { success: true, message: "پروفایل با موفقیت به‌روزرسانی شد" }
      }
      
      return { success: false, message: "کاربر یافت نشد" }
    } catch (error) {
      return { success: false, message: "خطا در به‌روزرسانی پروفایل" }
    } finally {
      setIsLoading(false)
    }
  }

  const value: AuthContextType = {
    user,
    isLoading,
    isAuthenticated,
    login,
    register,
    logout,
    updateProfile,
    checkAuth,
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}