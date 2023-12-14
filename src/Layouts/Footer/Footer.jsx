import React from 'react'
import styles from './Footer.module.css'
import { NavLink } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.footerContent}>footer content</p>
    </footer>
  )
}
