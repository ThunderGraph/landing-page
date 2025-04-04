import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Blog - ThunderGraph',
  description: 'Latest news, updates and articles from ThunderGraph',
}

export default function Blog() {
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Page header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h1 className="h1 mb-4">ThunderGraph Blog</h1>
            <p className="text-xl text-gray-400">Latest insights, updates and news from the ThunderGraph team</p>
          </div>

          {/* Blog entries grid */}
          <div className="max-w-sm mx-auto md:max-w-none">
            <div className="grid gap-12 md:grid-cols-3 md:gap-x-6 md:gap-y-8 items-start">
              
              {/* MBSE Blog post */}
              <article className="flex flex-col h-full" data-aos="fade-up">
                <header>
                  <Link href="/blog/automating-mbse" className="block mb-6">
                    <div className="relative h-0 pb-9/16 overflow-hidden rounded-sm">
                      <Image 
                        src="/images/blog/automating-mbse/product_image.png"
                        alt="AI-Driven MBSE System Visualization"
                        className="absolute inset-0 w-full h-full object-cover"
                        width={500}
                        height={280}
                      />
                    </div>
                  </Link>
                  <div className="mb-3">
                    <ul className="flex flex-wrap text-xs font-medium -m-1">
                      <li className="m-1">
                        <span className="inline-flex text-center text-xs font-medium py-1 px-3 rounded-full bg-purple-600 text-white">AI</span>
                      </li>
                      <li className="m-1">
                        <span className="inline-flex text-center text-xs font-medium py-1 px-3 rounded-full bg-blue-500 text-white">Engineering</span>
                      </li>
                    </ul>
                  </div>
                  <h3 className="h4 mb-2">
                    <Link href="/blog/automating-mbse" className="hover:text-gray-100 transition duration-150 ease-in-out">Automating Model Based Systems Engineering with AI</Link>
                  </h3>
                </header>
                <p className="text-lg text-gray-400 grow">Learn how AI is revolutionizing Model Based Systems Engineering (MBSE) by automating model generation and validation for complex engineering projects.</p>
                <footer className="flex items-center mt-4">
                  <div className="text-sm text-gray-500">
                    <span>April 4, 2025</span>
                  </div>
                </footer>
              </article>
              
            </div>
          </div>

        </div>
      </div>
    </section>
  )
} 