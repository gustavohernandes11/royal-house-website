import Link from "next/link";
import Image from "next/image";
import styles from "./styles.module.scss";
import Logo from "../../public/RoyalHouseLogo.svg";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Image
        className={styles.logo}
        src={Logo}
        alt="logo"
        height={20}
        width={121}
      />
      <nav className={styles.nav}>
        <Link href="/about">Sobre Nós</Link>
        <Link href="/buy">Comprar</Link>
        <Link href="/rent">Alugar</Link>
        <Link className={styles.highlightButton} href="/properties">
          Ver todos
        </Link>
      </nav>
    </header>
  );
};
