import { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'

export default function Header() {
  const [isMenuOn, setMenuOn] = useState(false)

  const toggleMenu = () => {
    setMenuOn(!isMenuOn)
  }
  
  return (
    <nav className="bg-white px-2 sm:px-4 py-2.5 dark:bg-zinc-800">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <a href="/" className="flex items-center">
          <img src="/favicon.png" className="mr-3 h-6 sm:h-9" alt="React Wars Logo" />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">React Wars!</span>
        </a>
        <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-zinc-500 rounded-lg md:hidden hover:bg-zinc-100 focus:outline-none focus:ring-2 focus:ring-zinc-200 dark:text-zinc-400 dark:hover:bg-zinc-700 dark:focus:ring-zinc-600" aria-controls="navbar-default" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <GiHamburgerMenu className="w-6 h-6" aria-hidden="true" onClick={() => toggleMenu()}/>
        </button>
        <div className={`${isMenuOn? '' : 'hidden'} w-full md:block md:w-auto`} id="navbar-default">
          <ul className="flex flex-col p-4 mt-4 bg-zinc-50 rounded-lg border border-zinc-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-zinc-800 md:dark:bg-zinc-800 dark:border-zinc-700">
            <li>
              <a href="#" className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" onClick={() => toggleMenu()}>Home</a>
            </li>
            <li>
              <a href="#" className="block py-2 pr-4 pl-3 text-zinc-700 rounded hover:bg-zinc-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-zinc-400 md:dark:hover:text-white dark:hover:bg-zinc-700 dark:hover:text-white md:dark:hover:bg-transparent" onClick={() => toggleMenu()}>Characters</a>
            </li>
            <li>
              <a href="#" className="block py-2 pr-4 pl-3 text-zinc-700 rounded hover:bg-zinc-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-zinc-400 md:dark:hover:text-white dark:hover:bg-zinc-700 dark:hover:text-white md:dark:hover:bg-transparent" onClick={() => toggleMenu()}>Random character</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  )
}