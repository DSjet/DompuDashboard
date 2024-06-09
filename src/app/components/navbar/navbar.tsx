"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import CreateForm from "../createForm/createForm";

const Navbar: React.FC = () => {
  // create a state for showing the modal
  const [showCreateForm, setShowModal] = useState(false);
  return (
    <div className="">
      {showCreateForm && <CreateForm setShowModal={setShowModal} />}
      <nav className="absolute bottom-0 w-full">
        {/* check if the modal is open */}
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
            <Image
              src="images/icons/plus.svg"
              alt="home icon"
              width={40}
              height={40}
              onClick={() => setShowModal(true)}
            />
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
    </div>
  );
};

export default Navbar;
