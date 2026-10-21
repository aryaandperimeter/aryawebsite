import './globals.css'
import type { Metadata } from 'next'
import { Inter, JetBrains_Mono, Fraunces } from 'next/font/google'
import ThemeToggle from './components/ThemeToggle'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })
const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' })
const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-serif',
  weight: ['500', '600', '700'],
  style: ['normal', 'italic'],
})

export const metadata: Metadata = {
  title: 'Arya Sharma - Portfolio',
  description: 'Personal portfolio website showcasing my projects, experiences, and skills',
}

const themeInitScript = `(function(){try{var t=localStorage.getItem('theme');if(t==='light'){document.documentElement.setAttribute('data-theme','light');}}catch(e){}})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${mono.variable} ${fraunces.variable} ${inter.className} bg-ink text-fg min-h-screen antialiased`}>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <div className="page-frame" aria-hidden />
        <ThemeToggle />
        {children}
      </body>
    </html>
  )
}
