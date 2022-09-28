import { SiGithub, SiLinkedin } from 'react-icons/si'

export default function Footer() {
  return (
    <footer className="p-4 bg-white shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-zinc-800">
      <span className="text-sm text-zinc-700 dark:text-zinc-300 sm:text-center">React Wars! by <a href="https://www.linkedin.com/in/bernatescarra/" target="_blank" className="underline">Bernat Escarrà</a> for <a href="https://www.holavilma.com/" target="_blank" className="underline">Vilma</a>.</span>
      <ul className="flex items-center gap-4 mt-3 text-zinc-700 dark:text-zinc-300 sm:mt-0">
        <li>
          <a href="https://github.com/thisisbernat" target="_blank" className="hover:text-zinc-500 hover:dark:text-white"><SiGithub /></a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/bernatescarra/" target="_blank" className="hover:text-zinc-500 hover:dark:text-white"><SiLinkedin /></a>
        </li>
      </ul>
    </footer>
  )
}

