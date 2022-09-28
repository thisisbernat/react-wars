import { GoSearch } from 'react-icons/go'
import { HiX } from "react-icons/hi"

export default function Search({ handleSubmit, handleTerm, searchTerm, cleanTerm }) {
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-200">Search</label>
      <div className="relative">
        <input type="search" id="default-search" className="block py-[11px] px-2 w-full text-sm text-gray-900 rounded-sm border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-300 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Filter by name" onChange={handleTerm} value={searchTerm} required />
        <div className="absolute bottom-3 right-12 cursor-pointer" title="Clean search" onClick={cleanTerm}><HiX className="h-4 w-4 text-zinc-800 dark:text-white" /></div>
        <button type="submit" className="text-white absolute right-2.5 bottom-1.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"><GoSearch className="w-4 h-4 text-white" /></button>
      </div>
    </form>
  )
}