import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Hassan - Web Developer',
  description: 'Meet Hassan Trabelsi: The fun-loving full-stack JS engineer! Click to see cool code projects and a few laughs along the way.',
  other: {
    'theme-color': '#0d1117',
    "color-scheme": "dark only",
    "twitter:image": 'https://i.ibb.co/DV3hR0x/homepage-thumbnail.png',
    "twitter:card": "summary_large_image",
    "og:url": "hassan-trabelsi.me",
    "og:image": 'https://i.ibb.co/DV3hR0x/homepage-thumbnail.png',
    "og:type": "website",
  }
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
