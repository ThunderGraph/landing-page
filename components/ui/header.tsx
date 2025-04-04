import Link from 'next/link'
import MobileMenu from './mobile-menu'
import Image from 'next/image'
import logo from '@/public/images/logo.png'


export default function Header() {
  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4 mt-10">
            {/* Logo */}
            <Link href="/" className="block mt-5" aria-label="Cruip">
              <Image src={logo} alt="Logo" width={100} height={100} />
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop menu links */}
            <ul className="flex grow justify-start flex-wrap items-center">
              <li className="mr-2">
                <Link
                  href="/"
                  className="font-medium text-purple-500 hover:text-purple-400 px-4 py-2 flex items-center transition duration-150 ease-in-out rounded-lg"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="font-medium text-purple-500 hover:text-purple-400 px-4 py-2 flex items-center transition duration-150 ease-in-out rounded-lg"
                >
                  Blog
                </Link>
              </li>
            </ul>
            
            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              {/* <li>
                <Link
                  href="https://thundergraph-fe5b7f96ed2c.herokuapp.com/"
                  className="mt-5 font-bold border-cyan-300 text-cyan-300 hover:text-cyan-200 hover:border-cyan-200 hover:bg-blue-600 px-4 py-3 flex items-center transition duration-150 ease-in-out border-2 rounded-lg"
                  target='_blank'
                  rel="noopener noreferrer"
                >
                  Sign in
                </Link>
              </li> */}
              {/* <li>
                <Link href="/signup" className="font-bold text-blue-950 bg-cyan-300 hover:bg-cyan-700 px-4 py-3 flex items-center transition duration-150 ease-in-out rounded-lg ml-3">
                  Sign up
                </Link>
              </li> */}
            </ul>
          </nav>

          <MobileMenu />

        </div>
      </div>
    </header>
  )
}
