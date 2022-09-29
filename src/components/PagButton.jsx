import { BiChevronLeft, BiChevronRight } from 'react-icons/bi'

export default function PagButton({ type, isActive, getNextPage, getPrevPage }) {
  if (type === 'next') {
    return (
      <button className={`${isActive ? 'text-white' : 'text-gray-500 cursor-default'} text-sm p-3 pl-4 bg-slate-600 rounded-sm flex items-center`} onClick={isActive ? getNextPage : undefined} > Next <BiChevronRight className="h-4 w-auto" /></button>
    )
  } else if (type === 'prev') {
    return (
      <button className={`${isActive ? 'text-white' : 'text-gray-500 cursor-default'} text-sm p-3 pr-4 bg-slate-600 rounded-sm flex items-center justify-center`} onClick={isActive ? getPrevPage : undefined}><BiChevronLeft className="h-4 w-auto" />Prev</button>
    )
  }
}