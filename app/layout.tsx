import './globals.css'
import type { Metadata } from 'next'
import { JetBrains_Mono } from 'next/font/google'

const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' })

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
      <body className={`${mono.variable} min-h-screen bg-paper font-sans text-fg antialiased`}>
        {children}
      </body>
    </html>
  )
}
