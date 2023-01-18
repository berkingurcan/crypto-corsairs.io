import React from "react";
import Link from "next/link";

import styles from "./styles.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      Created by&nbsp;
      <Link href="https://github.com/berkingurcan" target="_blank">
        Berkin Gürcan
      </Link>
    </footer>
  );
}

export default Footer;