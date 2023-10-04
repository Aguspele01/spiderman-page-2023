import { useEffect } from 'react';
import { useAppContext } from '@/contexts/AppContext';
import ShowSingleCard from '@/components/ShowSingleCard';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';


const SingleCardContainer = ({ id }) => {

  const { show, getShow, showLoading } = useAppContext();

  useEffect(() => {
    if (id) {
      getShow(id);
    }
  }, [id, getShow]);

  return (
    <>
      <Navbar />
      {showLoading && <p>LOADING....</p>}
      {!showLoading && <ShowSingleCard show={show} />}
      <Footer />
    </>
  );
};

export default SingleCardContainer;