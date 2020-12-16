import styles from '../styles/Main.module.css'

export default function Menu() {
    
    return (
        <div>
        <div className={styles.main}>
            <div className={styles.mainText}>
        <p className={styles.chees}>Say chees!</p>
        <p className={styles.gallery}>John Doe gallery</p>
        </div>
        </div>
    </div>
    )
  }