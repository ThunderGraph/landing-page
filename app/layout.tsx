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
  title: "ThunderGraph - Trustworthy AI for Systems Engineering Traceability.",
  description: "An AI software for model based systems engineers to automate requirements traceability and SysML model generation.",
  // viewport: "width=device-width, initial-scale=1",
  charSet: "utf-8",
  keywords: "AI, artificial intelligence, model based systems engineering, systems, requirements, aerospace, manufacturing, energy, engineering, systems engineering, collaboration, copilot, automation",
  author: "ThunderGraph Team",
  images: "/images/logo.png",
  metadataBase: 'https://www.thundergraph.ai',
  // metadataBase: 'http://localhost:3001',
  icons: {
    icon: "/images/favicon.ico"
  },
  openGraph: {
    type: "website",
    url: "https://www.thundergraph.com/",
    title: "ThunderGraph - Trustworthy AI for Systems Engineering Traceability.",
    description: "An AI software for model based systems engineers to automate requirements traceability and SysML model generation.",
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
      <head>
        <link rel="icon" href="/images/favicon.ico" sizes="any" />
      </head>
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
 