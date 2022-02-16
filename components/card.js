import Image from 'next/image'
import Link from 'next/link'

import styles from '../styles/Card.module.css'

export default function card( { pokemon } ){

    return (
        <Link href={ `/pokemon/${ pokemon.id }` } >
            <div className={ styles.card }>
                <div className={ styles.img }>
                    
                    <Image src={`https://cdn.traction.one/pokedex/pokemon/${ pokemon.id }.png`} width="130" height="140" alt={ pokemon.name } />
                </div>
                    <p className={ styles.id }>#{ pokemon.id } </p>
                <div >               
                    <h3 className={ styles.title }> {pokemon.name} </h3>
                </div>
            </div>
        </Link>
    )

}