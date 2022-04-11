import Link from 'next/link';
import React, { ReactChild } from 'react';

type Props = {
  name: string;
  children?: ReactChild;
};

function Option({ name, children }: Props) {
  return (
    <li className="flex flex-col md:block hover:opacity-80 px-1 transition-all duration-200 text-2xl lg:text-base w-full mx-1 lg:mx-2 rounded-md whitespace-nowrap bg-dark-gray md:bg-transparent items-center justify-center h-32">
      {children}
      <Link href="/">
        <p className="mt-4 md:hidden text-xs">{name}</p>
      </Link>
    </li>
  );
}

export default Option;
