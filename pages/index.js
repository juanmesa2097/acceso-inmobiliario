import Head from "next/head";
import FeaturedHouses from "../components/FeaturedHouses/FeaturedHouses";
import FilterBox from "../components/FilterBox/FilterBox";
import Footer from "../components/Footer/Footer";
import HeroCarousel from "../components/HeroCarousel/HeroCarousel";
import Navbar from "../components/Navbar/Navbar";

export default function Home() {
  return (
    <div className="h-full bg-gray-50">
      <Head>
        <title>Welcome to next starter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="relative">
        <Navbar />
        <HeroCarousel></HeroCarousel>
        <FilterBox />
      </div>

      <FeaturedHouses />

      <Footer />
    </div>
  );
}
