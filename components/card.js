import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import CircularProgress from '@mui/material/CircularProgress';

import styles from '../styles/Card.module.css'


export default function card( { pokemon } ){

    const [loading, setLoading] = useState(true);



    return (
        <Link href={ `/pokemon/${ pokemon.id }` } >
            <div className={ styles.card }>
                <div className={ styles.img }>

                { loading && (
                    <CircularProgress color="inherit" className={ styles.loading } />
                                    
                )
               }

                <div  >
                    <Image src={`https://cdn.traction.one/pokedex/pokemon/${ pokemon.id }.png`} 
                    width="130" 
                    height="140"
                    onLoad={ () => 
                        setLoading(false)
                    
                    }    
                    />
                </div>
                

                </div>
                    <p className={ styles.id }>#{ pokemon.id } </p>
                <div >               
                    <h3 className={ styles.title }> {pokemon.name} </h3>
                </div>
            </div>
        </Link>
    )

}