'use client'

import { useEffect } from 'react'

import AOS from 'aos'
import 'aos/dist/aos.css'

import PageIllustration from '@/components/page-illustration'
import Footer from '@/components/ui/footer'
import Head from 'next/head'

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode
}) {  

  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 600,
      easing: 'ease-out-sine',
    })
  })

  return (
    <>
      <Head>
        <title>ThunderGraph - Requirements done right, right when you need them.</title>
        <meta name='description' content='An AI software that generates requirements for engineer hardware companies in aerospace, energy, and manufacturing industries. It is a tool that lets engineers and product managers collaborate with AI to write requirements documentation fast and reliably.'/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        {/* <meta name="description" content='An AI software that generates requirements for engineer hardware companies in aerospace, energy, and manufacturing industries. It is a tool that lets engineers and product managers collaborate with AI to write requirements documentation fast and reliably.' /> */}
        <meta name="keywords" content="AI, requirements, aerospace, manufacturing, energy, engineering, systems engineering, product managers, collaboration, copilot, automation" />
        <meta name="author" content="ThunderGraph Team" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.thundergraph.com/" />
        <meta property="og:title" content="ThunderGraph - Requirements done right, right when you need them" />
        <meta property="og:description" content='An AI software that generates requirements for engineer hardware companies in aerospace, energy, and manufacturing industries. It is a tool that lets engineers and product managers collaborate with AI to write requirements documentation fast and reliably.' />
        <meta property="og:image" content="https://www.thundergraph.com/og-image.jpg" />

        <link rel="icon" href="/images/favicon.ico" />
      </Head>
      <main className="grow">

        <PageIllustration />

        {children}

      </main>

      {/* <Footer /> */}
    </>
  )
}
