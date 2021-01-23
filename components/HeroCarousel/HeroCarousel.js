import { Button, Carousel } from "antd";
import React, { useState } from "react";
import styles from "./HeroCarousel.module.css";

const HeroCarousel = () => {
  const [autoplay, setAutoplay] = useState(true);

  const img1Styles = {
    backgroundImage:
      "url(https://images.pexels.com/photos/755028/pexels-photo-755028.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)",
  };
  const img2Styles = {
    backgroundImage:
      "url(https://images.pexels.com/photos/864994/pexels-photo-864994.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)",
  };
  const img3Styles = {
    backgroundImage:
      "url(https://images.pexels.com/photos/5094684/pexels-photo-5094684.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)",
  };

  return (
    <>
      <Carousel dotPosition="right" effect="fade" autoplay={autoplay}>
        <div>
          <div
            className={`${styles.item} flex flex-col items-center justify-center h-screen`}
            style={img1Styles}
          >
            <h1 className="max-w-4xl mb-6 text-6xl font-semibold leading-snug text-center text-white">
              Lorem ipsum dolor, sit amet consectetur adipisicing.
            </h1>
            <p className="max-w-xl mb-6 text-lg text-center text-white">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              quam, quos nihil libero aut reprehenderit consectetur quod eveniet
              magni tenetur!
            </p>
            <Button type="primary" shape="round" size="large">
              Comenzar
            </Button>
          </div>
        </div>
        <div>
          <div
            className={`${styles.item} flex flex-col items-center justify-center h-screen`}
            style={img2Styles}
          >
            <h1 className="max-w-4xl mb-6 text-6xl font-semibold leading-snug text-center text-white">
              Lorem ipsum dolor, sit amet consectetur adipisicing.
            </h1>
            <p className="max-w-xl mb-6 text-lg text-center text-white">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              quam, quos nihil libero aut reprehenderit consectetur quod eveniet
              magni tenetur!
            </p>
            <Button type="primary" shape="round" size="large">
              Comenzar
            </Button>
          </div>
        </div>
        <div>
          <div
            className={`${styles.item} flex flex-col items-center justify-center h-screen`}
            style={img3Styles}
          >
            <h1 className="max-w-4xl mb-6 text-6xl font-semibold leading-snug text-center text-white">
              Lorem ipsum dolor, sit amet consectetur adipisicing.
            </h1>
            <p className="max-w-xl mb-6 text-lg text-center text-white">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              quam, quos nihil libero aut reprehenderit consectetur quod eveniet
              magni tenetur!
            </p>
            <Button type="primary" shape="round" size="large">
              Comenzar
            </Button>
          </div>
        </div>
      </Carousel>
    </>
  );
};

export default HeroCarousel;
