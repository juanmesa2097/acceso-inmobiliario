import Head from "next/head";
import FilterBox from "../components/FilterBox/FilterBox";
import Footer from "../components/Footer/Footer";
import HeroCarousel from "../components/HeroCarousel/HeroCarousel";
import Navbar from "../components/Navbar/Navbar";
import SectionFeaturedHouses from "../components/SectionFeaturedHouses/SectionFeaturedHouses";
import SectionValues from "../components/SectionValues/SectionValues";

export default function Home() {
  return (
    <div className="h-full bg-gray-50">
      <Head>
        <title>Welcome to next starter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="relative">
        <Navbar />
        <HeroCarousel />
        <FilterBox />
      </section>

      <SectionFeaturedHouses />

      <SectionValues />

      <Footer />
    </div>
  );
}
