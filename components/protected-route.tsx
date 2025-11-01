"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/contexts/auth-context"
import { ProtectedRouteProps } from "@/lib/types"
import { Loader2 } from "lucide-react"

export function ProtectedRoute({ 
  children, 
  requireAuth = true, 
  requireAdmin = false,
  redirectTo = "/login"
}: ProtectedRouteProps) {
  const { user, isAuthenticated, isLoading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!isLoading) {
      if (requireAuth && !isAuthenticated) {
        router.push(redirectTo)
        return
      }

      if (requireAuth && requireAdmin && !user?.isAdmin) {
        router.push("/")
        return
      }
    }
  }, [isLoading, isAuthenticated, user, requireAuth, requireAdmin, router, redirectTo])

  // Show loading spinner while checking authentication
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="flex items-center gap-2">
          <Loader2 className="h-6 w-6 animate-spin" />
          <span>در حال بارگذاری...</span>
        </div>
      </div>
    )
  }

  // If authentication is required but user is not authenticated
  if (requireAuth && !isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-xl font-semibold mb-4">دسترسی مجاز نیست</h2>
          <p className="text-muted-foreground mb-6">
            برای دسترسی به این صفحه باید وارد حساب کاربری خود شوید
          </p>
          <button
            onClick={() => router.push(redirectTo)}
            className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90"
          >
            ورود به حساب
          </button>
        </div>
      </div>
    )
  }

  // If admin access is required but user is not admin
  if (requireAuth && requireAdmin && !user?.isAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-xl font-semibold mb-4">دسترسی ادمین مورد نیاز است</h2>
          <p className="text-muted-foreground mb-6">
            شما دسترسی لازم برای مشاهده این صفحه را ندارید
          </p>
          <button
            onClick={() => router.push("/")}
            className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90"
          >
            بازگشت به صفحه اصلی
          </button>
        </div>
      </div>
    )
  }

  return <>{children}</>
}