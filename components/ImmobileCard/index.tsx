import Link from "next/link";
import styles from "./styles.module.scss";
import exempleImage from "../../public/house-cover-exemple.jpg";
import React from "react";
import Image from "next/image";

type ImmobileCardProps = {
  id: number;
  title: string;
  district?: string;
  location: string;
  purpose: "toSell" | "toRent" | "both";
  detailsPageUrl: string;
  cover: {
    url: string;
    height: number;
    width: number;
    alt: string;
  };
  price: {
    toSell?: number;
    toRent?: number;
  };
  propertyCharacteristics: {
    type: string;
    dorms: number;
    vacancies: number;
    toilets: number;
    squareMetersUsableArea: number;
  };
};

let BRL = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

export const ImmobileCard = ({
  title,
  location,
  purpose,
  detailsPageUrl,
  cover,
  price,
  propertyCharacteristics,
}: ImmobileCardProps) => {
  return (
    <Link href={detailsPageUrl} className={styles.immobileCard}>
      <header className={styles.header}>
        <Image
          alt={cover.alt}
          src={exempleImage}
          height={200}
          width={300}
          className={styles.cover}
        />
        <div className={styles.prices}>
          {purpose === "toRent" && (
            <span className={styles.toRent}>
              {BRL.format(price.toRent)}/month
            </span>
          )}
          {purpose === "toSell" && (
            <span className={styles.toSell}>{BRL.format(price.toSell)}</span>
          )}
        </div>
      </header>
      <body className={styles.body}>
        <p className={styles.location}>{location}</p>
        <h1 className={styles.title}>{title}</h1>

        <footer className={styles.footer}>
          <span className={styles.propertyCharacteristics}>
            <p className={styles.dorms}>
              <b>{propertyCharacteristics.dorms} </b>
              quartos
            </p>
            <p className={styles.squareMetersUsableArea}>
              <b>{propertyCharacteristics.squareMetersUsableArea} </b> m²
            </p>
            <p className={styles.toilets}>
              <b>{propertyCharacteristics.toilets} </b>
              suítes
            </p>
            <p className={styles.vacancies}>
              <b>{propertyCharacteristics.vacancies} </b>
              vagas
            </p>
          </span>
          <button className={styles.button}>Conferir</button>
        </footer>
      </body>
    </Link>
  );
};
