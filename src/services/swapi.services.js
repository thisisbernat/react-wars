const getPeople = async (pageId = '1', resultsOnly = true) => {
  try {
    const ApiRes = await fetch(`https://swapi.dev/api/people/?page=${pageId}`)
    const peopleRes = await ApiRes.json()
    if (resultsOnly) {
      return peopleRes.results
    } else {
      return peopleRes
    }
  } catch (err) {
    console.error(err)
  }
}

const getAllPeople = async () => {
  try {
    let allPeople = []
    let next = '1'
    while (next) {
      const people = await getPeople(next, false)
      allPeople = [...allPeople, ...people.results]
      next = people.next?.split('=')[1]
    }
    return allPeople
  } catch (err) {
    console.error(err)
  }
}

const getPerson = async (personId = '1', resultsOnly = true) => {
  try {
    const ApiRes = await fetch(`https://swapi.dev/api/people/${personId}`)
    const personRes = await ApiRes.json()
    if (resultsOnly) {
      return personRes.results
    } else {
      return personRes
    }
  } catch (err) {
    console.error(err)
  }
}

export { getPeople, getAllPeople, getPerson }