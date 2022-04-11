import Link from 'next/link';
import React from 'react';

const alphabet = [
  'TODOS',
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];

function LetterNavbar() {
  return (
    <nav className="w-full pt-4">
      <ul className="flex justify-between bg-light-gray px-2 sm:px-4 py-2 rounded-md overflow-auto">
        {alphabet.map((letter: string) => (
          <li
            className="text-white font-roboto hover:opacity-60 transition-all duration-200 mx-2"
            key={letter}
          >
            <Link href="/">{letter}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default LetterNavbar;
