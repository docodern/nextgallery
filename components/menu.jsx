import React, { useEffect, useState, useRef } from 'react';
import styles from '../styles/Menu.module.css'


export default function Menu() {
    const [open, setOpen] = useState();
    const handleToggle = () => {
        setOpen(!open);
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

    return (
        <div ref={node}>
        <div className={styles.menu}>
            <div className={styles.langButton}>EN</div>
            <div className={styles.logo}>NextJS Gallery</div>
            <div className={styles.burger}>
                <button className={`${styles.ham} ${open ? styles.hamClose : null}`} onClick={handleToggle}></button>
            </div>
        </div>
        <div className={`${styles.menuLinks} ${open ? styles.showMenu : null}`}>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Gallery</li>
            <li>Contacts</li>
        </ul>
    </div>
    </div>
    )
  }
