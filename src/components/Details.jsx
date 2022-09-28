import { useState, useEffect } from 'react'
import { getPerson } from '../services/swapi.services'
import Loader from './Loader'

export default function Details({ personId, isPersonSelected = true }) {
  const [person, setPerson] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(true)
    if (isPersonSelected) {
      getPerson(personId)
        .then(res => setPerson(res))
        .then(() => setIsLoading(false))
        .catch(err => console.log(err))
    }
  }, [personId])

  if (!isPersonSelected) {
    return (
      <div className="mx-auto text-center">
        <h1 className="text-zinc-300 font-semibold text-lg md:border-2 border-zinc-300 p-2 rounded-sm">Click on a character's name to display its details</h1>
      </div>
    )
  } else {
    if (isLoading) {
      return (
        <div className="mx-auto my-4">
          <Loader />
        </div>
      )
    } else {
      return (
        <div className="text-slate-200 flex flex-col items-center text-center mx-5 my-4">
          <h1 className="text-3xl font-bold mb-2 text-white">{person.name}</h1>
          <p className="text-xl"><span className="font-bold">{person.name}</span> is a <span className="font-bold">{person.gender}</span> with <span className="font-bold">{person.hair_color} hair</span> and <span className="font-bold">{person.eye_color} eyes</span>.</p>
          <p className="text-xl">{person.gender === 'male' ? 'He' : 'She'} is <span className="font-bold">{person.height} cm</span> tall and weights <span className="font-bold">{person.mass} kg</span>.</p>
        </div>
      )
    }
  }
}