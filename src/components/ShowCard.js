import Image from "next/image";
import Buttonlink from "./Buttonlink";

const ShowCard = ({ actualShow }) => {
  const { show } = actualShow;
  const { name, id, image } = show;

  return (
    <div className="show_container col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 flex flex-col gap-3 justify-start items-center">
      <div className="border-2 border-red-700 border-solid mb-2 w-full h-auto">
        <Image src={image?.original} width={680} height={1000} alt={name} />
      </div>

      <h3>{name}</h3>
      <Buttonlink id={id} />
    </div>
  );
};

export default ShowCard;
