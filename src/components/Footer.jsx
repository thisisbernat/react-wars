import { SiGithub, SiLinkedin } from 'react-icons/si'

export default function Footer() {
  return (
    <footer className="p-4 bg-white shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-zinc-800">
      <span className="text-sm text-zinc-500 sm:text-center dark:text-zinc-400">React Wars! by <a href="https://www.linkedin.com/in/bernatescarra/" target="_blank" className="underline">Bernat Escarrà</a> for <a href="https://www.holavilma.com/" target="_blank" className="underline">Vilma</a>.</span>
      <ul className="flex items-center gap-4 mt-3 text-zinc-500 dark:text-zinc-400 sm:mt-0">
        <li>
          <a href="https://github.com/thisisbernat" target="_blank" className="hover:contrast-200"><SiGithub /></a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/bernatescarra/" target="_blank" className="hover:contrast-200"><SiLinkedin /></a>
        </li>
      </ul>
    </footer>

  )
}

