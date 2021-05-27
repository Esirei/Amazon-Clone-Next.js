import React, { FC } from 'react';
import Image from 'next/image';
import { MenuIcon, SearchIcon, ShoppingCartIcon } from '@heroicons/react/outline';

const Header: FC = () => (
  <header>
    <div className="flex flex-1 items-center bg-amazon-blue p-1 py-2">
      <div className="mt-2 flex flex-1 sm:flex-none items-center">
        <Image
          src="/logo.png"
          width="150"
          height="40"
          objectFit="contain"
          className="cursor-pointer"
        />
      </div>

      <div className="hidden sm:flex flex-1 items-center h-10 rounded-md cursor-pointer overflow-hidden">
        <input type="text" className="flex-1 h-full px-4 outline-none" />
        <SearchIcon className="h-12 p-4 flex-shrink-0 bg-yellow-400 hover:bg-yellow-500" />
      </div>

      <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
        <div className="cursor-pointer hover:underline">
          <p>Hello, Akpesiri</p>
          <p className="font-extrabold md:text-sm">Account & Lists</p>
        </div>
        <div className="cursor-pointer hover:underline">
          <p>Returns</p>
          <p className="font-extrabold md:text-sm">& Orders</p>
        </div>
        <div className="cursor-pointer hover:underline flex items-center">
          <div className="h-10 relative">
            <ShoppingCartIcon className="h-10" />
            <span className="absolute top-0 right-0 h-4 w-4 text-center rounded-full text-black font-bold bg-yellow-400">
              0
            </span>
          </div>
          <p className="hidden md:block mt-2 font-extrabold md:text-sm">Basket</p>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
