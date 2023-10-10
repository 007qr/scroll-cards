import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

const poppins = Poppins({ weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],subsets: ['latin-ext'] })

export const metadata: Metadata = {
  title: 'The All-In-One Platform for Creators | Beacons',
  description: 'Beacons is a free, all-in-one platform with all the tools creators need to build a custom link in bio, grow a fanbase, and make more money. Sign up today!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
