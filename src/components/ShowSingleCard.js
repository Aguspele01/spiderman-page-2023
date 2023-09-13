import Image from "next/image";

const ShowSingleCard = ({ show }) => {
  return (
    <div className="bg-gradient-to-r from-red-500 from-40% to-blue-700 to-90%">
      <h2 className='text-7xl text-white pt-5'><strong>{show.name}</strong></h2>
      {show.image && (<Image src={show.image?.original} width={450} height={1000} alt={show.name} className="mx-auto border-8 border-yellow-300"/>)}
      <br></br>
      <h2 className='mb-1  text-white text-6xl'><strong>{show.language}</strong></h2>
      <br></br>
      <h2 className='mb-1  text-white'><strong>{show.premiered}</strong></h2>
      <br></br>
      <h2 className='mb-1  text-white'><strong>{show.ended}</strong></h2>
    </div>
  );
};

export default ShowSingleCard;
