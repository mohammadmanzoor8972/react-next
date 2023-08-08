"use client"

import React, { useContext } from 'react'
import styles from './DarkModelToggle.module.css';
import { ThemeContext } from '../../context/ThemeContext';


export default function DarkModeToggle() {
    const [toggle, mode] = useContext(ThemeContext);

  return (
    <div className={styles.container}>
       <button className={styles.icons} onClick={toggle}>{mode}</button>
    </div>
  )
}
