'use client'

import Link from 'next/link'
import { Home, Server, Settings, User } from 'lucide-react'

const Sidebar = () => {
  return (
    <aside className="w-64 h-screen bg-gray-100 p-4 border-r">
      <h2 className="text-2xl font-bold mb-6">Pizen Panel</h2>
      <ul className="space-y-4">
        <li>
          <Link href="/dashboard" className="flex items-center gap-2 text-gray-700 hover:text-black">
            <Home size={20} /> داشبورد
          </Link>
        </li>
        <li>
          <Link href="/users" className="flex items-center gap-2 text-gray-700 hover:text-black">
            <User size={20} /> کارفرما
          </Link>
        </li>
        <li>
          <Link href="/servers" className="flex items-center gap-2 text-gray-700 hover:text-black">
            <Server size={20} /> سرور
          </Link>
        </li>
        <li>
          <Link href="/settings" className="flex items-center gap-2 text-gray-700 hover:text-black">
            <Settings size={20} /> تنظیمات
          </Link>
        </li>
      </ul>
    </aside>
  )
}

export default Sidebar
