'use client';
import { Image } from '@nextui-org/react';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Button } from '@nextui-org/react';
import { motion } from 'framer-motion';
import MainHero from './componenets/homepage/hero';
import HomeImage from './componenets/homepage/homeimage';
import VideoCatch from './componenets/homepage/videocatch';
import ServicesSection from './componenets/packagespage/servicessection';
import Reviews from './componenets/homepage/reviews';

import Summary from './componenets/homepage/summary';
export default function Home() {
  const [welcome, setWelcome] = useState('Welcome');

  return (
    <div>
      <MainHero />
      <HomeImage />
      <Summary />
      <VideoCatch />
      <Reviews />
    </div>
  );
}
