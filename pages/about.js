import Image from 'next/image'
import styles from '../styles/About.module.css'

export default function about(){
        return (
            <div className={ styles.about }>
                <h1>Sobre o projeto</h1>
                <p>Projeto criado durante o curso de Next.JS do canal Hora de Codar do professor Matheus Battisti</p>

                <Image src="/images/pikachu.png" width="300" height="300" alt="Pikachu" />
            </div>
        )
}