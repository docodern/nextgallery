import styles from '../styles/Body.module.css'

export default function Body() {
    
    return (
    <div>
        <div className={styles.text}><p className={styles.kind}>A different kind of photography.</p>
        <p className={styles.intro}>Forget everything you know about traditional photo sessions.</p></div>
        <div className={styles.body}>
        <div className={`${styles.section} ${styles.sec1}`}><div className={styles.photo1}></div></div>
        <div className={`${styles.section} ${styles.sec2}`}><div className={styles.descr1}><p className={styles.intro}>Cool locations</p><p className={styles.header}>Lorem ipsum dolor</p><p className={styles.picText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut aliquet diam. Phasellus hendrerit nisi vel sapien posuere laoreet.</p></div></div>
        <div className={`${styles.section} ${styles.sec3}`}><div className={styles.photo2}></div></div>
        <div className={`${styles.section} ${styles.sec4}`}><div className={styles.descr2}><p className={styles.intro}>unforgettable experience</p><p className={styles.header}>Lorem ipsum dolor</p><p className={styles.picText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut aliquet diam. Phasellus hendrerit nisi vel sapien posuere laoreet.</p></div></div>
        <div className={`${styles.section} ${styles.sec5}`}><div className={styles.photo3}></div></div>
        <div className={`${styles.section} ${styles.sec6}`}><div className={styles.descr3}><p className={styles.intro}>lorem ipsum</p><p className={styles.header}>Lorem ipsum dolor</p><p className={styles.picText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut aliquet diam. Phasellus hendrerit nisi vel sapien posuere laoreet.</p></div></div>
        </div>
        <div className={styles.order}><button className={styles.orderButton} src='/contacts'>ORDER NOW</button></div>
    </div>    
    )
  }