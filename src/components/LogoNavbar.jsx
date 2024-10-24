import Image from 'next/image';
import React from 'react';
import logo from '../../public/images/futureTech.png';

const LogoNavbar = () => {
  return (
    <div className="flex items-center justify-between w-full p-4 sm:p-6 md:p-10 ">
      <div className="flex items-center ml-4 md:ml-16 mt-2 md:mt-4">
        <Image src={logo} alt="FutureTech Logo" width={120} height={40} className="sm:w-[150px] sm:h-[50px]" />
      </div>
    </div>
  );
};

export default LogoNavbar;
