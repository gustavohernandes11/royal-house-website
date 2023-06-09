import styles from "./styles.module.scss";
import LogoBox from "../../public/RoyalHouseLogoBox.svg";
import React from "react";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__logoContainer}>
        <a href="/" className={styles.footer__link}>
          <Image src={LogoBox} alt="Logo quadrada" height={100} width={206} />
        </a>
      </div>
      <div className={styles.footer__grid}>
        <div className={styles.footer__gridItem}>
          <b className={styles.footer__linkLabel}>Links Externos</b>
          <a className={styles.footer__link} href="">
            Termos de Serviços
          </a>
          <a className={styles.footer__link} href="">
            CRECI
          </a>
          <a className={styles.footer__link} href="">
            Ouvidoria
          </a>
        </div>
        <div className={styles.footer__gridItem}>
          <b className={styles.footer__linkLabel}>Navegação</b>
          <a className={styles.footer__link} href="">
            Início
          </a>
          <a className={styles.footer__link} href="">
            Sobre nós
          </a>
          <a className={styles.footer__link} href="">
            Alugar
          </a>
          <a className={styles.footer__link} href="">
            Comprar
          </a>
        </div>
        <div className={styles.footer__gridItem}>
          <b className={styles.footer__linkLabel}>Redes Sociais</b>
          <a className={styles.footer__link} href="">
            Instagram
          </a>
          <a className={styles.footer__link} href="">
            Facebook
          </a>
        </div>
      </div>
    </footer>
  );
};
