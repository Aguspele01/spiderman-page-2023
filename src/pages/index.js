import { useAppContext } from '@/contexts/AppContext'; // PASO 1
import Navbar from '@/components/Navbar';
import HomeContainer from '@/containers/HomeContainer';
import Section from '@/components/Section'
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <HomeContainer />
      <Section />
      <Footer />
    </>
  );
}