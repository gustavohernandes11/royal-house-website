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
      <header className={styles.immobileCard__header}>
        <Image
          alt={cover.alt}
          src={exempleImage}
          height={200}
          width={300}
          className={styles.immobileCard__cover}
        />
        <div className={styles.immobileCard__prices}>
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
      <main className={styles.immobileCard__main}>
        <p className={styles.immobileCard__location}>{location}</p>
        <h1 className={styles.immobileCard__title}>{title}</h1>

        <footer className={styles.immobileCard__footer}>
          <span className={styles.immobileCard__propertyCharacteristics}>
            <p className={styles.immobileCard__dorms}>
              <b>{propertyCharacteristics.dorms} </b>
              quartos
            </p>
            <p className={styles.immobileCard__squareMetersUsableArea}>
              <b>{propertyCharacteristics.squareMetersUsableArea} </b> m²
            </p>
            <p className={styles.immobileCard__toilets}>
              <b>{propertyCharacteristics.toilets} </b>
              suítes
            </p>
            <p className={styles.immobileCard__vacancies}>
              <b>{propertyCharacteristics.vacancies} </b>
              vagas
            </p>
          </span>
          <button className={styles.immobileCard__button}>Conferir</button>
        </footer>
      </main>
    </Link>
  );
};
