import Image from "next/image";
import { useAppContext } from "@/contexts/AppContext";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center h-35 bg-gradient-to-r from-red-500 from-40% to-blue-700 to-90% px-5 ">
      <div className='w-32 h-auto'>
        <Image
          src={`/assets/Spider-Man-Logo.png`}
          width={300}
          height={64}
          alt={`Logo`}
        />
      </div>
      <nav className='hidden sm:block'>
        <ul className="flex justify-end items-center gap-4 text-white">
          <li className='hover:opacity-50'><button><strong>Comics</strong></button></li>
          <li className='hover:opacity-50'><button><strong>Games</strong></button></li>
        </ul>
      </nav>
      <div className='sm:hidden'>
      <RxHamburgerMenu size={20} color={`white`} />
      </div>
    </div>
  );
};

export default Navbar;