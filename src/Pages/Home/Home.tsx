import styles from "./Home.module.scss";
import offerImg from "../../assets/offerImg.svg";
import { useState } from "react";
import { ICard } from "../../interface/type";
import Card from "../../components/Card/Card";

import cardImg1 from "../../assets/Card/1item.svg";
import Footer from "../../components/Footer/Footer";
const Home = () => {
  const [activeButton, setActiveButton] = useState("All");
  const handleClick = (category) => {
    setActiveButton(category);
  };

  const categories = ["All", "Man's wear", "Electronic", "Jewelry"];

  const data: ICard[] = [
    {
      id: 1,
      img: cardImg1,
      title: "Marko De lagrange",
      price: 44.99,
      category: "All",
    },
    {
      id: 2,
      img: cardImg1,
      title: "Marko De lagrange",
      price: 44.99,
      category: "Jewelry",
    },
  ];
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
          <div className={styles.categoryItem}>
            {categories[0] ? (
              <div>
                {activeButton === "All" ? (
                  <div>
                    {data
                      .filter(
                        (item) =>
                          item.category === "All" ||
                          item.category === activeButton
                      )
                      .map((item) => (
                        <div key={item.id}>
                          <Card card={item} />
                        </div>
                      ))}
                  </div>
                ) : activeButton === "Man's wear" ? (
                  <div>
                    {data
                      .filter(
                        (item) =>
                          item.category === "Man's wear" ||
                          item.category === activeButton
                      )
                      .map((item) => (
                        <div key={item.id}>
                          <Card card={item} />
                        </div>
                      ))}
                  </div>
                ) : activeButton === "Electronic" ? (
                  <div>
                    {data
                      .filter(
                        (item) =>
                          item.category === "Electronic" ||
                          item.category === activeButton
                      )
                      .map((item) => (
                        <div key={item.id}>
                          <Card card={item} />
                        </div>
                      ))}
                  </div>
                ) : activeButton === "Jewelry" ? (
                  <div>
                    {data
                      .filter(
                        (item) =>
                          item.category === "Jewelry" ||
                          item.category === activeButton
                      )
                      .map((item) => (
                        <div key={item.id}>
                          <Card card={item} />
                        </div>
                      ))}
                  </div>
                ) : (
                  <div>
                    {data
                      .filter(
                        (item) =>
                          item.category === "All" ||
                          item.category === activeButton
                      )
                      .map((item) => (
                        <div key={item.id}>
                          <Card card={item} />
                        </div>
                      ))}
                  </div>
                )}
              </div>
            ) : (
              <div>0</div>
            )}
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Home;
