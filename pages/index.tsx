import { NextPage } from "next";
import styles from "../styles/Home.module.scss";

const Page: NextPage = () => {
  return (
    <>
      <div className={styles.coverSpace}>
        <div className={styles.shade} />

        <form className={styles.searchBox}>
          <span className={styles.formColumn}>
            <label htmlFor="type-input">Tipo</label>
            <input
              className={styles.formInput}
              id="type-input"
              type="select"
              placeholder="Apartamento, Casa, Flat..."
            />
          </span>
          <span className={styles.formColumn}>
            <label htmlFor="pourpose-input">Propósito</label>
            <input
              className={styles.formInput}
              id="pourpose-input"
              type="select"
              placeholder="Comprar ou Alugar"
            />
          </span>
          <span className={styles.formColumn}>
            <label htmlFor="district-input">Bairro</label>
            <input
              className={styles.formInput}
              id="district-input"
              type="select"
              placeholder="Vila Velha"
            />
          </span>

          <span className={styles.formColumn}>
            <label htmlFor="price-input">Preço</label>
            <span className={styles.flexRow}>
              <input
                className={`${styles.priceInput} ${styles.formInput}`}
                id="first-price-input"
                type="select"
                placeholder="À partir de"
              />
              <p>...</p>
              <input
                className={`${styles.priceInput} ${styles.formInput}`}
                id="second-price-input"
                type="select"
                placeholder="Até"
              />
            </span>
          </span>
          <span className={styles.formColumn}>
            <button className={styles.formButton}>Buscar</button>
          </span>
        </form>
      </div>
    </>
  );
};

export default Page;
