// Root layout with internationalization support
import { Metadata } from "next"
import "./globals.css"
import { getDictionary } from "./dictionaries"
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  const dict = await getDictionary(params.lang)
  
  return {
    title: dict.metadata.title,
    description: dict.metadata.description,
  }
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
