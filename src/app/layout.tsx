// app/layout.tsx

import './global.css'
import type { Metadata } from 'next'
import { Vazirmatn } from 'next/font/google'

const vazir = Vazirmatn({
  subsets: ['arabic'],
  weight: ['400', '500', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'پنل پایزن',
  description: 'سامانه مدیریت هوشمند پایزن',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fa" dir="rtl">
      <body
        className={`${vazir.className} min-h-screen bg-lightBlue text-primaryBlue antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
