"use client";

import { usePathname } from "next/navigation";

const Header: React.FC = () => {
  const pathname = usePathname();

  const getPageTitle = (path: string): string => {
    switch (path) {
      case "/":
        return "Beranda";
      case "/pemasukan":
        return "Pemasukan";
      case "/pengeluaran":
        return "Pengeluaran";
      case "/profil":
        return "Profil";
      default:
        return "PWA App";
    }
  };

  const pageTitle = getPageTitle(pathname);

  return (
    <header className="w-full bg-primary-0 py-5 px-10">
      <h1 className="text-base font-bold text-white text-center">
        {pageTitle}
      </h1>
    </header>
  );
};

export default Header;
