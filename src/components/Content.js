import styles from '../styles/components/Content.module.scss'
import { BsClock } from 'react-icons/bs';
import Image from "next/image"

export function Content() {
    return(
        <div className={styles.contentContainer}>
            <div className={styles.header}>
                <p>Está disponível agora!</p>
                <h1>Loki</h1>
            </div>

            <section className={styles.infoContainer}>
                <div className={styles.cover}>
                    <picture>
                        <Image src="capa.png" alt="Loki" />
                    </picture>
                </div>
                <div className={styles.info}>
                    <div className={styles.synopsis}>
                        <p>
                            Em Loki da Marvel Studios, o vilão mercurial Loki retoma
                            seu papel como o Deus do Mal em uma nova série que ocorre
                            após os eventos de Vingadores: Endgame.
                        </p>
                    </div>

                    <div className={styles.techInfo}>
                        <span className={styles.duration}><BsClock />51min</span>
                        <div className={styles.starsRating}>
                            <input type="radio" id="st1" value="1" />
                            <label htmlFor="st1"></label>
                            <input type="radio" id="st2" value="2" />
                            <label htmlFor="st2"></label>
                            <input type="radio" id="st3" value="3" />
                            <label htmlFor="st3"></label>
                            <input type="radio" id="st4" value="4" />
                            <label htmlFor="st4"></label>
                            <input type="radio" id="st5" value="5" />
                            <label htmlFor="st5"></label>
                        </div>
                        <span>2021</span>
                    </div>

                    <div className={styles.actionButtons}>
                        <button className={`${styles.watchNowButton} btn`}>Assistir agora</button>
                        <button className={`${styles.trailerButton} btn`}>Trailer</button>
                    </div>
                </div>
            </section>
        </div>
    )
}