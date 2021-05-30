import React, { FC } from 'react';
import Image from 'next/image';
import { MenuIcon, SearchIcon, ShoppingCartIcon } from '@heroicons/react/outline';
import { signIn, signOut, useSession } from 'next-auth/client';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { selectTotalCartItems } from '~/features/cart';

const Header: FC = () => {
  const [session] = useSession();
  const router = useRouter();
  const totalItems = useSelector(selectTotalCartItems);
  return (
    <header>
      <div className="flex flex-1 items-center bg-amazon-blue p-1 py-2">
        <div className="mt-2 flex flex-1 sm:flex-none items-center">
          <Image
            src="/logo.png"
            width="150"
            height="40"
            objectFit="contain"
            className="cursor-pointer"
            onClick={() => router.push('/')}
          />
        </div>

        <div className="hidden sm:flex flex-1 items-center h-10 rounded-md cursor-pointer overflow-hidden">
          <input type="text" className="flex-1 h-full px-4 outline-none" />
          <SearchIcon className="h-12 p-4 flex-shrink-0 bg-yellow-400 hover:bg-yellow-500" />
        </div>

        <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
          <button
            className="cursor-pointer hover:underline focus:outline-none text-left"
            onClick={() => (session ? signOut() : signIn())}>
            <p>{session ? `Hello, ${session.user.name.split(' ')[0]}` : 'Sign In'}</p>
            <p className="font-extrabold md:text-sm">Account & Lists</p>
          </button>
          <div className="cursor-pointer hover:underline">
            <p>Returns</p>
            <p className="font-extrabold md:text-sm">& Orders</p>
          </div>
          <button
            className="cursor-pointer hover:underline focus:outline-none flex items-center"
            onClick={() => router.push('/checkout')}>
            <div className="h-10 relative">
              <ShoppingCartIcon className="h-10" />
              <span className="absolute top-0 right-0 h-4 w-4 text-center rounded-full text-black font-bold bg-yellow-400">
                {totalItems}
              </span>
            </div>
            <p className="hidden md:block mt-2 font-extrabold md:text-sm">Basket</p>
          </button>
        </div>
      </div>

      <div className="flex items-center space-x-3 px-3 py-2 bg-amazon-blue-light text-white text-sm">
        <p className="cursor-pointer hover:underline flex items-center">
          <MenuIcon className="h-6 mr-1" />
          All
        </p>
        <p className="cursor-pointer hover:underline">Prime Video</p>
        <p className="cursor-pointer hover:underline">Amazon Business</p>
        <p className="cursor-pointer hover:underline">Today&apos;s Deals</p>
        <p className="cursor-pointer hover:underline hidden lg:inline">Electronics</p>
        <p className="cursor-pointer hover:underline hidden lg:inline">Food & Grocery</p>
        <p className="cursor-pointer hover:underline hidden lg:inline">Prime</p>
        <p className="cursor-pointer hover:underline hidden lg:inline">Buy Again</p>
        <p className="cursor-pointer hover:underline hidden lg:inline">Shopper Toolkit</p>
        <p className="cursor-pointer hover:underline hidden lg:inline">Health & Personal Care</p>
      </div>
    </header>
  );
};

export default Header;
