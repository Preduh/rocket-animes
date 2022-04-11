import type { NextPage } from 'next';
import React from 'react';
import Content from '../components/Content';
import Navbar from '../components/Navbar';

const Home: NextPage = () => (
  <div className="w-full h-full bg-light-gray">
    <Navbar />
    <Content />
  </div>
);

export default Home;
