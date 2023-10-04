import Image from "next/image";


const ShowSingleCard = ({ show }) => {
  return (
    
    <div className=" bg-slate-100 flex pt-12 pb-12">
      {show.image && (<Image src={show.image?.original} width={450} height={1000} alt={show.name} className="ml-4 mt-4 mx-auto border-8 border-blue-700"/>)}
       <div>
        <h2 className='text-7xl text-red-600 pt-5'><strong>{show.name}</strong></h2>
        <p className='mb-5 text-black text-2xl ml-7 mr-7'>{show.summary.substring(3).slice(0, -4).replace(/<\/?[^>]+(>|$)/g, "")}</p>
        <p className="mb-5 text-black text-2xl ml-7 mr-7"><strong>Language:</strong> {show.language} </p>
        <p className=" text-black text-2xl ml-7 mr-7"><strong>Premiered:</strong> {show.premiered} </p>
      </div>
      
    </div>
  );
};

export default ShowSingleCard;
