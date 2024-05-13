import './css/style.css'

import { Inter, Architects_Daughter } from 'next/font/google'

import Header from '@/components/ui/header'
import Banner from '@/components/banner'
import Head from 'next/head'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

const architects_daughter = Architects_Daughter({
  subsets: ['latin'],
  variable: '--font-architects-daughter',
  weight: '400',
  display: 'swap'
})

export const metadata = {
  title: "ThunderGraph - Requirements done right, right when you need them.",
  description: "An AI software that generates requirements for engineer hardware companies in aerospace, energy, and manufacturing industries. It is a tool that lets engineers and product managers collaborate with AI to write requirements documentation fast and reliably.",
  // viewport: "width=device-width, initial-scale=1",
  charSet: "utf-8",
  keywords: "AI, requirements, aerospace, manufacturing, energy, engineering, systems engineering, product managers, collaboration, copilot, automation",
  author: "ThunderGraph Team",
  images: "/images/logo.png",
  openGraph: {
    type: "website",
    url: "https://www.thundergraph.com/",
    title: "ThunderGraph - Requirements done right, right when you need them",
    description: "An AI software that generates requirements for engineer hardware companies in aerospace, energy, and manufacturing industries. It is a tool that lets engineers and product managers collaborate with AI to write requirements documentation fast and reliably.",
    images: "/images/logo.png"
  },
  favicon: "/images/favicon.ico"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${architects_daughter.variable} font-inter antialiased bg-slate-900 text-gray-200 tracking-tight`}>
        <div className="flex flex-col min-h-screen overflow-hidden">
          <Header />
          {children}
          {/* <Banner /> */}
        </div>
      </body>
    </html>
  )
}
 