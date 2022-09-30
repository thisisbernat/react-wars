const getItems = async (type, param) => {
  const baseURL = 'https://swapi.dev/api'
  const map = {
    people: `${baseURL}/people/?page=${param}`,
    person: `${baseURL}/people/${param}`,
    search: `${baseURL}/people/?search=${param}`
  }
  
  try {
    const ApiRes = await fetch(map[type])
    const JSONRes = await ApiRes.json()
    return JSONRes
  } catch (err) {
    console.error(err)
  }
}

const getPeople = async (pageId = '1') => {
  return await getItems('people', pageId)
}

const getPerson = async (personId = '1') => {
  return await getItems('person', personId)
}

const searchPerson = async (name) => {
  return await getItems('search', name)
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

export { getPeople, getAllPeople, getPerson, searchPerson }