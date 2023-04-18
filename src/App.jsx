import { useEffect, useState } from 'react'
import './App.css'
const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
// const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstworld}`
const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

export function App () {
  const [fact, setFact] = useState()
  const [imageUrl, setImageUrl] = useState()

  // Para recuperar la cita al cargar la página
  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then(res => {
        // Todo: Handle error if !res.ok
        return res.json()
      })
      .then(data => {
        const { fact } = data
        setFact(fact)
      })
  }, [])
  // para recuperar la imagen cada vez que tenemos una nueva cita
  useEffect(() => {
    if (!fact) return
    const firstworld = fact.split(' ', 3).join(' ')
    console.log(firstworld)

    fetch(`https://cataas.com/cat/says/${firstworld}?size=50&color=orange&json=true`)
      .then(res => res.json())
      .then(response => {
        const { url } = response
        setImageUrl(url)
      })
  }, [fact])

  return (
    <main>
      <h1>App de Gatitos</h1>
      <section>
        {fact && <p>{fact}</p>}
        {imageUrl && <img src={`${CAT_PREFIX_IMAGE_URL}${imageUrl}`} alt={`Image extracted using the first three words for ${fact}`} />}
      </section>
    </main>
  )
}
