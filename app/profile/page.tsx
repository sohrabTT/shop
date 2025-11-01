"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProtectedRoute } from "@/components/protected-route"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Loader2, User, Mail, Phone, MapPin, Save, UserCheck } from "lucide-react"
import { useAuth } from "@/contexts/auth-context"

export default function ProfilePage() {
  const router = useRouter()
  const { user, updateProfile, isLoading } = useAuth()
  const [isEditing, setIsEditing] = useState(false)
  const [message, setMessage] = useState({ type: "", text: "" })
  const [formData, setFormData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    phone: user?.phone || "",
    address: user?.address || ""
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setMessage({ type: "", text: "" })

    const result = await updateProfile(formData)
    
    if (result.success) {
      setMessage({ type: "success", text: result.message })
      setIsEditing(false)
    } else {
      setMessage({ type: "error", text: result.message })
    }
  }

  const handleCancel = () => {
    setFormData({
      name: user?.name || "",
      email: user?.email || "",
      phone: user?.phone || "",
      address: user?.address || ""
    })
    setIsEditing(false)
    setMessage({ type: "", text: "" })
  }

  return (
    <ProtectedRoute requireAuth>
      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1 container mx-auto px-4 py-8">
          <div className="max-w-2xl mx-auto">
            <div className="mb-8">
              <h1 className="text-3xl font-bold mb-2">پروفایل کاربری</h1>
              <p className="text-muted-foreground">
                اطلاعات حساب کاربری خود را مشاهده و ویرایش کنید
              </p>
            </div>

            {message.text && (
              <Alert className={`mb-6 ${message.type === "error" ? "border-red-200 bg-red-50" : "border-green-200 bg-green-50"}`}>
                <AlertDescription className={message.type === "error" ? "text-red-800" : "text-green-800"}>
                  {message.text}
                </AlertDescription>
              </Alert>
            )}

            <Tabs defaultValue="profile" className="space-y-6">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="profile">اطلاعات شخصی</TabsTrigger>
                <TabsTrigger value="security">امنیت</TabsTrigger>
              </TabsList>

              <TabsContent value="profile">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <User className="h-5 w-5" />
                      اطلاعات شخصی
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">نام و نام خانوادگی</Label>
                          <div className="relative">
                            <User className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                            <Input
                              id="name"
                              name="name"
                              value={formData.name}
                              onChange={handleInputChange}
                              disabled={!isEditing || isLoading}
                              className="pr-10"
                              required
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="email">ایمیل</Label>
                          <div className="relative">
                            <Mail className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              disabled={!isEditing || isLoading}
                              className="pr-10"
                              required
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="phone">شماره تلفن</Label>
                          <div className="relative">
                            <Phone className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                            <Input
                              id="phone"
                              name="phone"
                              value={formData.phone}
                              onChange={handleInputChange}
                              disabled={!isEditing || isLoading}
                              className="pr-10"
                              placeholder="09xxxxxxxxx"
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="address">آدرس</Label>
                          <div className="relative">
                            <MapPin className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                            <Input
                              id="address"
                              name="address"
                              value={formData.address}
                              onChange={handleInputChange}
                              disabled={!isEditing || isLoading}
                              className="pr-10"
                              placeholder="آدرس کامل"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="flex gap-4">
                        {!isEditing ? (
                          <Button
                            type="button"
                            onClick={() => setIsEditing(true)}
                            disabled={isLoading}
                          >
                            ویرایش اطلاعات
                          </Button>
                        ) : (
                          <>
                            <Button
                              type="submit"
                              disabled={isLoading}
                            >
                              {isLoading ? (
                                <>
                                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                  در حال ذخیره...
                                </>
                              ) : (
                                <>
                                  <Save className="mr-2 h-4 w-4" />
                                  ذخیره تغییرات
                                </>
                              )}
                            </Button>
                            <Button
                              type="button"
                              variant="outline"
                              onClick={handleCancel}
                              disabled={isLoading}
                            >
                              لغو
                            </Button>
                          </>
                        )}
                      </div>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="security">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <UserCheck className="h-5 w-5" />
                      تنظیمات امنیتی
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium mb-2">تغییر رمز عبور</h4>
                        <p className="text-sm text-muted-foreground mb-4">
                          برای تغییر رمز عبور، روی دکمه زیر کلیک کنید
                        </p>
                        <Button variant="outline" disabled>
                          تغییر رمز عبور
                        </Button>
                      </div>

                      <div>
                        <h4 className="font-medium mb-2">احراز هویت دو مرحله‌ای</h4>
                        <p className="text-sm text-muted-foreground mb-4">
                          امنیت حساب خود را با احراز هویت دو مرحله‌ای افزایش دهید
                        </p>
                        <Button variant="outline" disabled>
                          فعال‌سازی 2FA
                        </Button>
                      </div>

                      <div>
                        <h4 className="font-medium mb-2">ورود به حساب در دستگاه‌های دیگر</h4>
                        <p className="text-sm text-muted-foreground mb-4">
                          لیست دستگاه‌هایی که به حساب شما دسترسی دارند
                        </p>
                        <Button variant="outline" disabled>
                          مشاهده دستگاه‌های متصل
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>

            {/* User Info Summary */}
            <Card className="mt-6">
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-sm text-muted-foreground">تاریخ عضویت</p>
                    <p className="font-medium">
                      {user?.createdAt 
                        ? new Date(user.createdAt).toLocaleDateString('fa-IR')
                        : "نامشخص"
                      }
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">آخرین ورود</p>
                    <p className="font-medium">
                      {user?.lastLogin 
                        ? new Date(user.lastLogin).toLocaleDateString('fa-IR')
                        : "نامشخص"
                      }
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">وضعیت حساب</p>
                    <p className="font-medium text-green-600">
                      {user?.isAdmin ? "ادمین" : "کاربر عادی"}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>

        <Footer />
      </div>
    </ProtectedRoute>
  )
}