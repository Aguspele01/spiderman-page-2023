import Image from "next/image";
import { useAppContext } from "@/contexts/AppContext";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoPersonCircle } from "react-icons/io5";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center h-24 bg-gradient-to-r from-red-600 from-40% to-blue-600 to-90% px-5">
      <Link href="/">
          <div className='w-32 h-auto'>
            <Image
              src={`/assets/Spider-Man-Logo.png`}
              width={300}
              height={64}
              alt={`Logo`}
            />
          </div>
      </Link>

      <nav className='hidden sm:block'>
        <ul className="flex justify-end items-center gap-4 text-white">
          <li> <button><IoPersonCircle size={40} color={`white`} /></button></li>
        </ul>
      </nav>
      <div className='sm:hidden'>
      <button><RxHamburgerMenu size={20} color={`white`} /></button>
      </div>
    </div>
  );
};

export default Navbar;
