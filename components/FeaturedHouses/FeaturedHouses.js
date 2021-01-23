import {
  PlusCircleOutlined,
  setTwoToneColor,
  StarTwoTone,
} from "@ant-design/icons";
import { Button } from "antd";
import React, { useEffect, useState } from "react";
import featuredHousesJson from "../../assets/db/houses.json";
import HousePreview from "./HousePreview";

setTwoToneColor("#d4af37");

const FeaturedHouses = (props) => {
  const [houses, setHouses] = useState([]);

  useEffect(() => {
    getFeaturedHouses();
  }, []);

  const getFeaturedHouses = async () => {
    const houses = JSON.parse(JSON.stringify(featuredHousesJson));
    console.log(houses);
    setHouses(houses);
  };

  return (
    <section className="container pt-72 pb-36">
      <h1 className="flex items-center mb-24 text-3xl font-semibold">
        <StarTwoTone className="mr-6" />
        Propiedades destacadas
      </h1>

      <div
        className="grid justify-between mb-12"
        style={{ gridTemplateColumns: "repeat(auto-fill, 28rem)" }}
      >
        {houses.map((h) => (
          <HousePreview key={h.id} info={h} />
        ))}
      </div>

      <div className="flex justify-center">
        <Button
          type="dashed"
          shape="round"
          size="large"
          icon={<PlusCircleOutlined />}
        >
          Ver más
        </Button>
      </div>
    </section>
  );
};

export default FeaturedHouses;
