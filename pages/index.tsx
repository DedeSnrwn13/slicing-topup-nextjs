import { useEffect } from 'react';
import AOS from 'aos';
import Navbar from './../components/organisms/Navbar/Index';
import MainBanner from '../components/organisms/MainBanner/Index';
import TransactionStep from './../components/organisms/TransactionStep/Index';
import FeatureGame from './../components/organisms/FeatureGame/Index';
import Reached from './../components/organisms/Reached/Index';
import Story from './../components/organisms/Story/Index';
import Footer from './../components/organisms/Footer/Index';

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
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
