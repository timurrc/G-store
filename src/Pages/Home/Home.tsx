import styles from "../../Styles/Layouts/Home.module.scss";
import offerImg from "../../Images/offerImg.svg";
import { useState } from "react";
import Card from "../../components/Card/Card";

import Footer from "../../components/Footer/Footer";
import {
  useGetProductMansQuery,
  useGetProductsElectronicQuery,
  useGetProductsJeweleryQuery,
  useGetProductsQuery,
} from "../../store/productApi/Productapi";
const Home = () => {
  const [activeButton, setActiveButton] = useState("All");
  const handleClick = (category) => {
    setActiveButton(category);
  };
  const { data, isLoading, error } = useGetProductsQuery(6);
  const {
    data: jewelryData,
    isLoading: jewelryIsLoading,
    error: jewelryError,
  } = useGetProductsJeweleryQuery("");
  const {
    data: electronicsData,
    isLoading: electronicsIsLoading,
    error: electronicsError,
  } = useGetProductsElectronicQuery("");
  const {
    data: mansData,
    isLoading: mansIsLoading,
    error: mansError,
  } = useGetProductMansQuery("");
  const categories = ["All", "Man's wear", "Electronic", "Jewelry"];

  return (
    <>
      <div className="container">
        <h2 style={{ marginBottom: 20 }}>Find your thing</h2>
        <section className={styles.mainOffer}>
          <img src={offerImg} alt="" />
          <div className={styles.mainOfferText}>
            <h2>Discounts on all</h2>
            <p>15 - 25 sep</p>
            <button className={styles.btnPrimary}>Grab Now</button>
          </div>
        </section>
        <section className={styles.categories}>
          <h2 style={{ marginBottom: 20 }}>Categories</h2>
          <div className={styles.categorySelect}>
            {categories.map((category) => (
              <button
                key={category}
                style={{
                  backgroundColor:
                    activeButton === category ? "black" : "white",
                  color: activeButton === category ? "white" : "black",
                }}
                onClick={() => handleClick(category)}
              >
                {category}
              </button>
            ))}
          </div>
          {isLoading ? (
            "loading.."
          ) : error ? (
            "error"
          ) : (
            <div className={styles.categoryItems}>
              {categories[0] ? (
                <div>
                  {activeButton === "All" ? (
                    <div className={styles.categoryItemsList}>
                      {data?.map((product) => (
                        <Card key={product.id} product={product} />
                      ))}
                    </div>
                  ) : activeButton === "Man's wear" ? (
                    <div className={styles.categoryItemsList}>
                      {mansData?.map((product) => (
                        <Card key={product.id} product={product} />
                      ))}
                    </div>
                  ) : activeButton === "Electronic" ? (
                    <div className={styles.categoryItemsList}>
                      {electronicsData?.map((product) => (
                        <Card key={product.id} product={product} />
                      ))}
                    </div>
                  ) : activeButton === "Jewelry" ? (
                    <div className={styles.categoryItemsList}>
                      {jewelryData?.map((product) => (
                        <Card key={product.id} product={product} />
                      ))}
                    </div>
                  ) : (
                    <div>
                      {data?.map((product: any) => (
                        <Card key={product.id} product={product} />
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <div></div>
              )}
            </div>
          )}
        </section>
        <Footer />
      </div>
    </>
  );
};

export default Home;
