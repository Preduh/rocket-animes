import React, { useState } from 'react';
import {
  AiFillHome,
  AiFillPlayCircle,
  AiFillRocket,
  AiOutlineUnorderedList,
} from 'react-icons/ai';
import { BiCategory, BiSearch } from 'react-icons/bi';
import { CgMenuGridO } from 'react-icons/cg';
import { IoMdClose } from 'react-icons/io';
import Option from './Option';

function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <>
      <div className="w-full h-16 bg-dark-gray text-white flex items-center justify-between font-semibold px-4 md:px-16 ">
        <button
          type="button"
          className="md:hidden text-xl"
          onClick={() => setMobileMenu(!mobileMenu)}
        >
          {mobileMenu ? <IoMdClose /> : <CgMenuGridO />}
        </button>
        <div className="h-full cursor-pointer">
          <a
            href="/"
            className="flex h-full items-center hover:opacity-60 transition-all duration-200"
          >
            <AiFillRocket className="text-2xl lg:text-4xl" />
            <h1 className=" font-roboto font-bold text-sm lg:text-xl md:text-base sm:text-sm">
              Rocket Animes
            </h1>
          </a>
        </div>
        <ul className="hidden md:flex">
          <Option name="Início" />
          <Option name="Lista de animes" />
          <Option name="Episódios" />
          <Option name="Gêneros" />
        </ul>
        <div className="bg-light-gray h-8 rounded-md flex">
          <input
            type="text"
            className="bg-transparent h-full border-none focus:ring-0 placeholder:text-white/60 hidden placeholder:text-sm w-24 lg:w-52 md:w-32 sm:w-24 md:inline"
            placeholder="Buscar anime"
          />
          <button
            type="button"
            className="bg-transparent px-1 w-8 h-8 flex items-center justify-center"
          >
            <BiSearch />
          </button>
        </div>
      </div>
      <ul
        className={`md:hidden text-white ${
          mobileMenu ? 'flex' : 'hidden'
        } justify-between font-roboto p-2`}
      >
        <Option name="Início">
          <AiFillHome />
        </Option>
        <Option name="Lista de animes">
          <AiOutlineUnorderedList />
        </Option>
        <Option name="Episódios">
          <AiFillPlayCircle />
        </Option>
        <Option name="Gêneros">
          <BiCategory />
        </Option>
      </ul>
    </>
  );
}

export default Navbar;
