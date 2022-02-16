import styles from '../styles/Home.module.css'
import Image from 'next/image'

import Card from '../components/card'

export async function getStaticProps() {

    let maxPokemons = 251

    const api = 'https://pokeapi.co/api/v2/pokemon/'

    const res = await fetch(`${api}/?limit=${ maxPokemons }`)
    const data = await res.json()

    // pokemon indexes

    data.results.forEach( (item, index) => {
      item.id = index + 1
    })

    return {
      props: {
        pokemons: data.results,
      }
    }
}

export default function Home( { pokemons } ) {


  return (
    <>
   
        <div className={ styles.title } >
          <h1> Poke<span>Next</span></h1>
          <Image src="/images/pokeball.png" height="50" width="50" alt="PokeNext" />
        </div>
        
        <div className={ styles.pokemon_container } >
          { pokemons.map( ( pokemon ) => (
            <Card key={ pokemon.id } pokemon={ pokemon } />
          ))}

        </div>
    
    </>
  )


}
