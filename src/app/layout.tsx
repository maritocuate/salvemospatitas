import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'

import { cn } from '@/lib/utils'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { ThemeProvider } from '@/components/theme-provider'

const roboto = Roboto({
  weight: '500',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Salvemos Patitas ONG',
  description: 'Asociación Protectora de Animales',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          roboto.className
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
