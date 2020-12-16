import styles from '../styles/Footer.module.css'

export default function Footer() {
    
    return (
    <footer className={styles.footer}>
        <div className={styles.text}>John Doe Gallery © 2020, All rights reserved</div>
        <div className={styles.devby}>Developed by DOCODERN.DEV</div>
    </footer>    
    )
  }