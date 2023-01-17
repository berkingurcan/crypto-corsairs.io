import Link from 'next/link';
import React from 'react';
import { FaAnchor } from 'react-icons/fa';
import styles from './styles.module.css';

function Header() {
  return (
    <header className={`${styles.header} container fluid`}>
      <div className={styles.headerWrapper}>
        <Link href='/' className={styles.logo}>
          <FaAnchor /> SOLPIRATES
        </Link>
        <nav className={styles.navigationMenu}>
          <Link href='/course'>COURSES</Link>
          <Link href='/about'>ABOUT SOLPIRATES</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
