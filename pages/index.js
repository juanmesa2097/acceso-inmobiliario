import Head from "next/head";
import FilterBox from "../components/FilterBox/FilterBox";
import HeroCarousel from "../components/HeroCarousel/HeroCarousel";
import SectionFeaturedHouses from "../components/SectionFeaturedHouses/SectionFeaturedHouses";
import SectionValues from "../components/SectionValues/SectionValues";

export default function Home() {
  return (
    <>
      <Head>
        <title>Welcome to next starter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="relative">
        <HeroCarousel />
        <FilterBox />
      </section>

      <SectionFeaturedHouses />

      <SectionValues />
    </>
  );
}
