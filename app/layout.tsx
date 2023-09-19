import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Hassan Trabelsi',
  description: 'Meet Hassan Trabelsi: The fun-loving full-stack JS engineer! Click to see cool code projects and a few laughs along the way.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-black-100 font-poppins">{children}</body>
    </html>
  )
}
