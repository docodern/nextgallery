import styles from '../styles/AboutMain.module.css'

export default function AboutMain() {
    
    return (
        <>
        <div className={styles.over}>
        <div className={styles.main}></div>
        <div className={styles.mainText}>
            <h1 className={styles.header}>My story</h1>
            <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vehicula, est id feugiat fermentum, nisl dolor scelerisque nunc, nec mattis quam dui in nunc. Nulla interdum dolor mattis, accumsan felis a, mattis lorem. Vivamus pretium enim at auctor convallis. Praesent vitae pretium mauris, non hendrerit massa. Nulla condimentum odio id congue laoreet. Etiam fermentum, metus sed vestibulum posuere, quam ligula mollis est, eu ullamcorper neque nulla eget diam. Mauris sit amet turpis ac eros consequat commodo a porttitor nibh. Aenean laoreet lobortis aliquam. Maecenas auctor mi id leo convallis, ac gravida odio mattis.</p>
        </div>
        </div>
        <div className={styles.over}>
        <div className={styles.features}><h2 className={styles.services}>My services</h2></div>
        <div className={styles.featuresText}>
            <div className={styles.cards}>
                <div className={`${styles.card} ${styles.bg1}`}>
                    <div className={`${styles.cardInfo} ${styles.left}`}>
                    <h3 className={styles.header}>Event photography</h3>
                    <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum finibus nulla at iaculis. Nam a finibus lorem, accumsan dapibus metus. Duis ac volutpat sapien, eget lobortis tellus.</p>
                    </div>
                </div>
                <div className={`${styles.card} ${styles.bg2}`}>
                    <div className={`${styles.cardInfo} ${styles.right}`}>
                    <h3 className={styles.header}>Wedding photography</h3>
                    <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum finibus nulla at iaculis. Nam a finibus lorem, accumsan dapibus metus. Duis ac volutpat sapien, eget lobortis tellus.</p>
                    </div>
                </div>
                <div className={`${styles.card} ${styles.bg3}`}>
                    <div className={`${styles.cardInfo} ${styles.left}`}>
                    <h3 className={styles.header}>Food photography</h3>
                    <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum finibus nulla at iaculis. Nam a finibus lorem, accumsan dapibus metus. Duis ac volutpat sapien, eget lobortis tellus.</p>
                    </div>
                </div>
                <div className={`${styles.card} ${styles.bg4}`}>
                    <div className={`${styles.cardInfo} ${styles.right}`}>
                    <h3 className={styles.header}>Marketing photography</h3>
                    <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum finibus nulla at iaculis. Nam a finibus lorem, accumsan dapibus metus. Duis ac volutpat sapien, eget lobortis tellus.</p>
                    </div>
                </div>
                <div className={`${styles.card} ${styles.bg5}`}>
                    <div className={`${styles.cardInfo} ${styles.left}`}>
                    <h3 className={styles.header}>Portrait photography</h3>
                    <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum finibus nulla at iaculis. Nam a finibus lorem, accumsan dapibus metus. Duis ac volutpat sapien, eget lobortis tellus.</p>
                    </div>
                </div>
                <div className={`${styles.card} ${styles.bg6}`}>
                    <div className={`${styles.cardInfo} ${styles.right}`}>
                    <h3 className={styles.header}>Nature photography</h3>
                    <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum finibus nulla at iaculis. Nam a finibus lorem, accumsan dapibus metus. Duis ac volutpat sapien, eget lobortis tellus.</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </>
    )
  }