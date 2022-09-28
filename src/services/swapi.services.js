const getPeople = async (pageId = '1') => {
  try {
    const ApiRes = await fetch(`https://swapi.dev/api/people/?page=${pageId}`)
    const peopleRes = await ApiRes.json()
    return peopleRes
  } catch (err) {
    console.error(err)
  }
}

const getAllPeople = async () => {
  try {
    let allPeople = []
    let next = '1'
    while (next) {
      const people = await getPeople(next)
      allPeople = [...allPeople, ...people.results]
      next = people.next?.split('=')[1]
    }
    return allPeople
  } catch (err) {
    console.error(err)
  }
}

const getPerson = async (personId = '1') => {
  try {
    const ApiRes = await fetch(`https://swapi.dev/api/people/${personId}`)
    const personRes = await ApiRes.json()
    return personRes
  } catch (err) {
    console.error(err)
  }
}

const searchPerson = async (name) => {
  try {
    const ApiRes = await fetch(`https://swapi.dev/api/people/?search=${name}`)
    const personRes = await ApiRes.json()
    return personRes
  } catch (err) {
    console.error(err)
  }
}

export { getPeople, getAllPeople, getPerson, searchPerson }