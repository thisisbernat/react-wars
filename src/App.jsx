import { useState, useEffect } from 'react'
import { getPeople } from './services/swapi.services'

export default function App() {
  const [people, setPeople] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getPeople()
      .then(res => setPeople(res))
      .then(() => setIsLoading(false))
      .catch(err => console.log(err))
  }, [])

  return (
    <>
    <div className="flex flex-col items-center mt-10">
      <h2 className="text-xl">Welcome to</h2>
      <h1 className="text-4xl font-bold">React Wars</h1>
    </div>
    {isLoading ? 'Loading' : JSON.stringify(people)}
    </>
  )
}