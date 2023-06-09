import { NextPage } from "next";
import styles from "../styles/Home.module.scss";
import { GridView } from "../components/GridView";
import { ImmobileCard } from "../components/ImmobileCard";
import { Title } from "../components/Title";

const Page: NextPage = () => {
  return (
    <main>
      <section className={styles.coverSection}>
        <form className={styles.searchForm}>
          <span className={styles.searchForm__column}>
            <label htmlFor="type-input">Tipo</label>
            <input
              className={styles.searchForm__input}
              id="type-input"
              type="select"
              placeholder="Apartamento, Casa, Flat..."
            />
          </span>
          <span className={styles.searchForm__column}>
            <label htmlFor="pourpose-input">Propósito</label>
            <input
              className={styles.searchForm__input}
              id="pourpose-input"
              type="select"
              placeholder="Comprar ou Alugar"
            />
          </span>
          <span className={styles.searchForm__column}>
            <label htmlFor="district-input">Bairro</label>
            <input
              className={styles.searchForm__input}
              id="district-input"
              type="select"
              placeholder="Vila Velha"
            />
          </span>

          <span className={styles.searchForm__column}>
            <label htmlFor="price-input">Preço</label>
            <span className={styles.searchForm__row}>
              <input
                className={`${styles.searchForm__priceInput} ${styles.searchForm__input}`}
                id="first-price-input"
                type="select"
                placeholder="À partir de"
              />
              <p className={styles.searchForm__spacingDots}>...</p>
              <input
                className={`${styles.searchForm__priceInput} ${styles.searchForm__input}`}
                id="second-price-input"
                type="select"
                placeholder="Até"
              />
            </span>
          </span>
          <span className={styles.searchForm__column}>
            <button className={styles.searchForm__button}>Buscar</button>
          </span>
        </form>
      </section>
      <section
        className={`${styles.purpleHomeSection} ${styles.purpleHomeSection__gridTwoColumns}`}
      >
        <div className={styles.purpleHomeSection__gridChild}>
          <b className={styles.purpleHomeSection__numberOfOptions}>52</b>
          <p>Opções disponíveis</p>
        </div>
        <div className={styles.purpleHomeSection__gridChild}>
          <h1>Imóveis de qualidade, com pouca burocracia.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
            voluptatem neque! Nesciunt, voluptate amet in earum placeat corrupti
            quibusdam eligendi.
          </p>
        </div>
      </section>
      <section>
        <Title>Destaques</Title>
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
            purpose={"toRent"}
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
        <div className={styles.moreOptions}>
          <a className={styles.moreOptions__link}>Ver mais opções!</a>
        </div>
      </section>
    </main>
  );
};

export default Page;
