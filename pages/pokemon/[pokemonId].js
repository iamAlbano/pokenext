import styles from '../../styles/Pokemon.module.css'

import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image'

import { BsFillArrowRightCircleFill as Right, BsFillArrowLeftCircleFill as Left } from 'react-icons/bs';

import CircularProgress from '@mui/material/CircularProgress';
import Skeleton from '@mui/material/Skeleton';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

let maxPokemons = 251

export const getStaticPaths = async() => {


    const api = 'https://pokeapi.co/api/v2/pokemon/'

    const res = await fetch(`${api}/?limit=${ maxPokemons }`)
    const data = await res.json()

    const paths = data.results.map( (pokemon, index) => {
        return {
            params: { pokemonId: (index+1).toString() },
        }
    })

    return {
        paths,
        fallback: true, 
        //fallback true renderiza em tempo real
    }
}

export const getStaticProps = async( context ) => {

    const id = context.params.pokemonId

    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${ id }`)

    const data = await res.json()

    return {
        props: {pokemon: data },
    }
}



export default function Pokemon( { pokemon }){

    const router = useRouter()

    if(router.isFallback){
        return (
            <div className={styles.container }>
                
                <CircularProgress color="error" className={ styles.loading } />
                <Skeleton 
                variant="rectangular" 
                width={393} 
                height={414}
                className={ styles.lazy_load }
                sx={{ 
                    bgcolor: 'rgba(25, 25, 25, 1)',
                    borderRadius: '2em',
                
                }} />
                
            </div>
        )
    }

    let next = `/pokemon/${ pokemon.id + 1 }`
    let previous = `/pokemon/${ pokemon.id - 1 }`

    if(pokemon.id == 1 ){
        previous = `/pokemon/${ maxPokemons }`
    } else if(pokemon.id == 891){
        next = `/pokemon/1`
    }



    return (
        <div className={styles.container }>
            <div className={ styles.card } >
                <h1 className={ styles.title }>{ pokemon.name } <span>#{ pokemon.id }</span></h1>

                

            
                <Link href={ previous } >
                    <Left className={ styles.arrow }/>
                </Link>

                <Image src={`https://cdn.traction.one/pokedex/pokemon/${ pokemon.id }.png`}
                width="200" 
                height="200" 
                alt={ pokemon.name } />

                <Link href={ next } >
                    <Right className={ styles.arrow } />
                </Link>
            
                

                <div>
                   
                    <div className={ styles.types }>
                        { pokemon.types.map( (item, index) => (
                            <span key={ index } 
                            className={ `${styles.type} ${styles['type_' + item.type.name] }` }>
                                { item.type.name }
                            </span>
                        ))}
                    </div>   
                </div>

                <div className={ styles.data_container }>
                    <div className={ styles.height }>
                    <h4>Altura:  </h4>
                    <p>  { pokemon.height * 10} cm</p> 
                    </div>

                    <div className={ styles.weight }>
                    <h4>Peso:  </h4>
                    <p>  { pokemon.weight / 10} kg</p> 
                    </div>
                </div>
            </div>

        </div>
    )
}