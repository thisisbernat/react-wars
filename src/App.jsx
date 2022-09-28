import { useState, useEffect } from 'react'
import { Route, useLocation } from "wouter"
import { getPeople, searchPerson } from './services/swapi.services'
import Layout from './components/Layout'
import Loader from './components/Loader'
import Search from './components/Search'
import Details from './components/Details'
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi'

export default function App() {
  const [people, setPeople] = useState([])
  const [currentPage, setCurrentPage] = useState('1')
  const [nextPage, setNextPage] = useState('')
  const [prevPage, setPrevPage] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [location, setLocation] = useLocation(false)
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    setIsLoading(true)
    getPeople(currentPage)
      .then(res => {
        setPeople(res.results)
        setNextPage(res.next?.split('=')[1])
        setPrevPage(res.previous?.split('=')[1])
      })
      .then(() => setIsLoading(false))
      .catch(err => console.log(err))
  }, [currentPage])

  const selectCharacter = (url) => {
    setLocation(`/character/${url.split('/').at(-2)}`)
  }

  const getNextPage = () => {
    setIsLoading(true)
    setCurrentPage(nextPage)
  }

  const getPrevPage = () => {
    setIsLoading(true)
    setCurrentPage(prevPage)
  }

  const handleSearchTerm = (e) => setSearchTerm(e.target.value)

  const cleanSearchTerm = () => {
    setSearchTerm('')
    if (currentPage !== '1') {
      setCurrentPage('1')
    } else {
      setCurrentPage('')
    }

  }

  const handleSearchSubmit = (e) => {
    e.preventDefault()
    setIsLoading(true)
    searchPerson(searchTerm)
      .then(res => {
        setPeople(res.results)
        setNextPage(null)
        setPrevPage(null)
      })
      .then(() => setIsLoading(false))
      .catch(err => console.log(err))
  }

  return (
    <Layout>
      <div className="flex-1 flex flex-col mx-12 md:mx-38 md:max-w-1/3 mt-10 md:mt-0 md:justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="bg-zinc-300 dark:bg-zinc-800 p-4 rounded flex flex-col gap-2">
            <div><Search handleSubmit={handleSearchSubmit} handleTerm={handleSearchTerm} searchTerm={searchTerm} cleanTerm={cleanSearchTerm} /></div>
            {isLoading ? <div className="my-56"><Loader /></div> : (people.map((person, i) => {
              return (
                <div key={i} className="bg-purple-800 hover:bg-purple-900 px-3 py-2 rounded-sm text-center cursor-pointer text-white font-medium" onClick={() => selectCharacter(`/character/${person.url}`)}>{person.name}</div>
              )
            }))}
            <div className="flex justify-between items-center">
              {prevPage ? <button className="text-white font-medium p-3 pr-4 bg-slate-600 rounded-sm flex items-center justify-center" onClick={getPrevPage}><BiChevronLeft />Prev</button> : <div className="text-gray-500 font-medium p-3 pr-4 bg-slate-600 rounded-sm flex items-center cursor-default"><BiChevronLeft />Prev</div>}
              <div className="text-zinc-700 dark:text-white font-medium p-3">Page {currentPage === '' ? '1' : currentPage}</div>
              {nextPage ? <button className="text-white font-medium p-3 pl-4 bg-slate-600 rounded-sm flex items-center" onClick={getNextPage}>Next<BiChevronRight /></button> : <div className="text-gray-500 font-medium p-3 pl-4 bg-slate-600 rounded-sm flex items-center cursor-default">Next<BiChevronRight /></div>}
            </div>
          </div>
          {location === '/' && <div className="bg-zinc-300 dark:bg-zinc-800 rounded flex justify-center items-center">
            <Details isPersonSelected={false} />
          </div>}
          <Route path="/character/:personId">
            {(params) => (
              <div className="bg-zinc-300 dark:bg-zinc-800 rounded flex justify-center items-center mb-5">
                <Details personId={params.personId} />
              </div>
            )}
          </Route>
        </div>
      </div>
    </Layout>
  )
}