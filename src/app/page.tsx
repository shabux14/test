'use client'

import Link from 'next/link'
import { Home, User, Server, Settings } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="flex min-h-screen bg-gradient-to-r from-blue-50 to-white">
      {/* سایدبار */}
      <aside className="w-72 bg-white shadow-lg flex flex-col p-8 text-gray-700 border-r border-gray-200">
        <h1 className="text-3xl font-extrabold mb-12 text-blue-800">پنل مرکزی پایزن</h1>
        <nav className="flex flex-col gap-6 text-lg font-semibold">
          <Link href="/dashboard" className="flex items-center gap-3 text-gray-600 hover:text-blue-600 transition">
            <Home size={24} /> داشبورد
          </Link>
          <Link href="/users" className="flex items-center gap-3 text-gray-600 hover:text-blue-600 transition">
            <User size={24} /> کارفرما
          </Link>
          <Link href="/servers" className="flex items-center gap-3 text-gray-600 hover:text-blue-600 transition">
            <Server size={24} /> سرورها
          </Link>
          <Link href="/settings" className="flex items-center gap-3 text-gray-600 hover:text-blue-600 transition">
            <Settings size={24} /> تنظیمات
          </Link>
        </nav>
      </aside>

      {/* بخش محتوای اصلی */}
      <main className="flex-1 flex flex-col justify-center items-center px-20">
        <h2 className="text-5xl font-extrabold text-blue-900 mb-4">پنل مرکزی پایزن</h2>
        <p className="text-lg text-gray-600 mb-12 max-w-lg text-center">
          سامانه مدیریت و نظارت پایزن - دسترسی سریع به داشبورد و تنظیمات سامانه
        </p>

        <div className="flex gap-8">
          <Link
            href="/dashboard"
            className="px-8 py-3 bg-blue-700 text-white rounded-lg shadow hover:bg-blue-800 transition font-semibold"
          >
            ورود به داشبورد
          </Link>
          <Link
            href="/settings"
            className="px-8 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 transition font-semibold"
          >
            تنظیمات سامانه
          </Link>
        </div>
      </main>
    </div>
  )
}
