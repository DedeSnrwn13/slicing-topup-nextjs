import { useEffect } from "react";
import Head from "next/head";
import AOS from "aos";
import Navbar from "../components/organisms/Navbar/Index";
import MainBanner from "../components/organisms/MainBanner/Index";
import TransactionStep from "../components/organisms/TransactionStep/Index";
import FeatureGame from "../components/organisms/FeatureGame/Index";
import Reached from "../components/organisms/Reached/Index";
import Story from "../components/organisms/Story/Index";
import Footer from "../components/organisms/Footer/Index";

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Head>
        <title>Store GG - Get a new Experience in Gaming</title>
        <meta
          name="description"
          content="Kami menyediakan jutaan cara untuk membantu players menjadi pemenang sejati"
        />
        <meta
          property="og:title"
          content="Store GG - Get a new Experience in Gaming"
        />
        <meta
          property="og:description"
          content="Kami menyediakan jutaan cara untuk membantu players menjadi pemenang sejati"
        />
        <meta property="og:image" content="" />
        <meta property="og:url" content="" />
      </Head>
      <Navbar />
      <MainBanner />
      <TransactionStep />
      <FeatureGame />
      <Reached />
      <Story />
      <Footer />
    </>
  );
}
