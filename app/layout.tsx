import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AIGIRI - Home',
  description: 'Created with AIGIRI',
  generator: 'AIGIRI',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
