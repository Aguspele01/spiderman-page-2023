import ShowCard from "@/components/ShowCard";
import { useAppContext } from "@/contexts/AppContext";

const CardsContainer = () => {
  const { shows, loading } = useAppContext();
  return (
    <section>
      <h2 className="font-['spiderfont'] text-6xl text-red-600">SHOWS</h2>
      {!loading && (
        <div className='my-0 m-auto max-w-{1200px}'>
          <div className="grid grid-cols-12 gap-4 gap-y-5">
            {shows.map((actualShow, index) => {
              return <ShowCard actualShow={actualShow} key={index} />;
            })}
          </div>
        </div>
      )}
      {loading && <p className='w-full flex justify-center'>Loading...</p>}
    </section>
  );
};

export default CardsContainer;
