import Link from 'next/link';
import React from 'react';
import styles from './styles.module.css';
import Image from 'next/image';
import Logo from './logo.png'

function Header() {
  return (
    <header className={`${styles.header} container fluid`}>
      <div className={styles.headerWrapper}>
        <Link href='/' className={styles.logo}>
          <Image src={Logo} alt={''} className={styles.logoIm}/>
          ANCHOR'S <span>AWEIGH</span>
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
