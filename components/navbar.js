import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Navbar.module.css'

export default function navbar(){

    return (
        <nav className={ styles.navbar }>
            <Link href="/" > 
                <div className={ styles.logo }>
                    <Image src="/images/pokeball.png" width="30" height="30" alt="PokeNext" />
                    <h1>Poke<span>Next</span></h1>
                </div>
            </Link>

            <ul className={ styles.link }>
                <li>
                   <Link href="/" > 
                        <a>Pokedex</a>
                   </Link> 
                </li>

                <li>
                    <Link href="/about" > 
                        <a>Sobre</a>  
                    </Link>
                </li>

            </ul>
        </nav>
    )

}