export default function Header() {
  return (
    <nav className="bg-white px-2 sm:px-4 py-3 dark:bg-zinc-800">
      <div className="container flex justify-center md:justify-start">
        <a href="/" className="flex items-center">
          <img src="/favicon.png" className="mr-3 h-6 sm:h-9" alt="React Wars Logo" />
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">React Wars!</span>
        </a>
      </div>
    </nav>

  )
}