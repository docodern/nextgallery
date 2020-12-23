import React, { useEffect, useState, useRef } from 'react';
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from '../styles/Menu.module.css'


export default function Menu({ ...menu }) {

  // router data
    const router = useRouter()
    const allLocales = router.locales;
    const currentLocale = router.locale
    const pathname = router.pathname

    // menu and locals opening
    const [open, setOpen] = useState();
    const handleToggle = () => {
        setOpen(!open);
      };
    const [openLocales, setOpenLocales] = useState();
    const handleToggleLocales = () => {
        setOpenLocales(!openLocales);
      };

      const useOnClickOutside = (ref, handler) => {
        useEffect(() => {
          const listener = event => {
            if (!ref.current || ref.current.contains(event.target)) {
              return;
            }
            handler(event);
          };
          document.addEventListener('mousedown', listener);
          return () => {
            document.removeEventListener('mousedown', listener);
          };
        },
        [ref, handler],
        );
      };
      const node = useRef(); 
      useOnClickOutside(node, () => setOpen(false));
      useOnClickOutside(node, () => setOpenLocales(false));

      // Check query for paths in locals section
      var queryValues=Object.values(router.query)
      var queryKeys=Object.keys(router.query)
      var myQuerys={}
      for (var k=0; k<allLocales.length; k++) {

        for (var j=0; j<menu.allQueryParams.allLangs.length; j++){
         
        if (allLocales[k]===menu.allQueryParams.allLangs[j].language){

          for (var a=0; a<queryKeys.length; a++){

          for (var i=0; i<queryValues.length; i++){

            var newQuery={}
            newQuery[queryKeys[a]]=menu.allQueryParams.allLangs[j][queryValues[i]]
          }
        }
        }
      }
      myQuerys[allLocales[k]]=newQuery;
      }


    return (
        <div ref={node}>
        <div className={styles.menu}>
            <div className={styles.langButton} onClick={handleToggleLocales}>{currentLocale}</div>
            <div className={styles.logo}>NextJS Gallery</div>
            <div className={styles.burger}>
                <button className={`${styles.ham} ${open ? styles.hamClose : null}`} onClick={handleToggle}></button>
            </div>
        </div>
        <div className={`${styles.menuLinks} ${open ? styles.showMenu : null}`}>
        <nav>
        <Link href='/' locale={currentLocale}>
        <a>{menu.lang.menu.home}</a>
      </Link>
      <Link href={`/${menu.lang.menu.paths.about}`} locale={currentLocale}>
        <a>{menu.lang.menu.about}</a>
      </Link>
      <Link href={`/${menu.lang.menu.paths.galleries}`} locale={currentLocale}>
        <a>{menu.lang.menu.galleries}</a>
      </Link>
        </nav>
    </div>
    <div className={`${styles.locales} ${openLocales ? styles.showLocales : null}`}>
      {allLocales.map((value) => {
        return <p key={value}><Link href={{
          pathname: pathname,
          query: myQuerys[value],
        }} locale={value}>
        <a>{value}</a>
      </Link></p>
        
      })}
    </div>
    </div>
    )
  }
