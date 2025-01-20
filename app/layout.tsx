import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Freight Forwarding with Five Star',
  description: 'Hawaii Freight Forwarding with Five Star',
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
