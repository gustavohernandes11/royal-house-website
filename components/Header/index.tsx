import Link from "next/link";
import Image from "next/image";
import styles from "./styles.module.scss";
import Logo from "../../public/RoyalHouseLogo.svg";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Image src={Logo} alt="logo" height={20} width={121} />
      <nav className={styles.nav}>
        <Link href="/" className={styles.nav__link}>
          Início
        </Link>
        <Link href="/about" className={styles.nav__link}>
          Sobre Nós
        </Link>
        <Link href="/buy" className={styles.nav__link}>
          Comprar
        </Link>
        <Link href="/rent" className={styles.nav__link}>
          Alugar
        </Link>
        <Link className={styles.nav__highlightButton} href="/properties">
          Ver todos
        </Link>
      </nav>
    </header>
  );
};
