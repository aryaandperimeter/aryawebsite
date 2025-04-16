import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import CustomCursor from './components/CustomCursor'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Arya Sharma - Portfolio',
  description: 'Personal portfolio website showcasing my projects, experiences, and skills',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white min-h-screen`}>
        <CustomCursor />
        {children}
      </body>
    </html>
  )
} 