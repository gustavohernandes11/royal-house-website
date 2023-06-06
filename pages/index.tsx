import { NextPage } from "next";
import styles from "../styles/Home.module.scss";
import { GridView } from "../components/GridView";
import { ImmobileCard } from "../components/ImmobileCard";

const Page: NextPage = () => {
  return (
    <main>
      <section className={styles.coverSection}>
        <div className={styles.shade} />

        <form className={styles.searchForm}>
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
      </section>
      <section
        className={`${styles.purpleHomeSection} ${styles.gridTwoColumns}`}
      >
        <div className={styles.flexColumn}>
          <span>52</span>
          <p>Opções disponíveis</p>
        </div>
        <div className={styles.flexColumn}>
          Imóveis de qualidade, com pouca burocracia.
        </div>
      </section>
      <section>
        <h1>Destaques</h1>
        <GridView>
          <ImmobileCard
            id={1}
            detailsPageUrl="/details/1"
            location="China, Ishkui"
            title={"Sui House"}
            purpose={"toSell"}
            cover={{
              url: "",
              height: 200,
              width: 300,
              alt: "alt",
            }}
            price={{
              toSell: 160000,
              toRent: 1400,
            }}
            propertyCharacteristics={{
              type: "casa",
              dorms: 3,
              vacancies: 1,
              toilets: 1,
              squareMetersUsableArea: 600,
            }}
          />
          <ImmobileCard
            id={1}
            detailsPageUrl="/details/1"
            location="China, Ishkui"
            title={"Sui House"}
            purpose={"toSell"}
            cover={{
              url: "",
              height: 200,
              width: 300,
              alt: "alt",
            }}
            price={{
              toSell: 160000,
              toRent: 1400,
            }}
            propertyCharacteristics={{
              type: "casa",
              dorms: 3,
              vacancies: 1,
              toilets: 1,
              squareMetersUsableArea: 600,
            }}
          />
          <ImmobileCard
            id={1}
            detailsPageUrl="/details/1"
            location="China, Ishkui"
            title={"Sui House"}
            purpose={"toSell"}
            cover={{
              url: "",
              height: 200,
              width: 300,
              alt: "alt",
            }}
            price={{
              toSell: 160000,
              toRent: 1400,
            }}
            propertyCharacteristics={{
              type: "casa",
              dorms: 3,
              vacancies: 1,
              toilets: 1,
              squareMetersUsableArea: 600,
            }}
          />
        </GridView>
      </section>
    </main>
  );
};

export default Page;
