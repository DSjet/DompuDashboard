import Link from "next/link";
import Image from "next/image";

const Navbar: React.FC = () => {
  return (
    <nav className="absolute bottom-0 w-full">
      <ul className="w-full flex py-5 items-center justify-evenly shadow-sm">
        <li>
          <Link href="/">
            <Image
              src="images/icons/home.svg"
              alt="home icon"
              width={40}
              height={40}
            />
            <small>Beranda</small>
          </Link>
        </li>
        <li>
          <Link href="/">
            <Image
              src="images/icons/home.svg"
              alt="home icon"
              width={40}
              height={40}
            />
            <small>Pemasukan</small>
          </Link>
        </li>
        <li className="bg-primary rounded-full p-4">
          <Link href="/">
            <Image
              src="images/icons/plus.svg"
              alt="home icon"
              width={40}
              height={40}
            />
          </Link>
        </li>
        <li>
          <Link href="/">
            <Image
              src="images/icons/home.svg"
              alt="home icon"
              width={40}
              height={40}
            />
            <small>Pengeluaran</small>
          </Link>
        </li>
        <li>
          <Link href="/">
            <Image
              src="images/icons/home.svg"
              alt="home icon"
              width={40}
              height={40}
            />
            <small>Profil</small>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
