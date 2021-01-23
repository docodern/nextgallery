import styles from '../styles/GalleriesMain.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function GalleriesMain({...album}) {

    const router = useRouter()
    const path = router.asPath;
    return (
        <>
        <div className={styles.container}>
        {album.photosets.photosets.photoset.map((photoset) => {
        return <div key={photoset.id} className={styles.box}><div className={styles.photo}><a href={`${path}/${photoset.id}`}><Image
        src={`https://live.staticflickr.com/${photoset.server}/${photoset.primary}_${photoset.secret}_b.jpg`}
        alt="Picture of the author"
        layout="fill"
      /></a></div><div className={styles.text}><p>{photoset.title._content}</p></div></div>
        })}
        </div>
        </>
    )
}