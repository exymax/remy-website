import React from 'react';

import Header from '~components/Header';
import AboutSection from '~components/AboutSection';
import SliderSection from '~components/SliderSection';
import HiringSection from '~components/HiringSection';
import Footer from '~components/Footer';

export default ({ onOpenHiringPanel, height }) => (
  <div>
    <Header height={height} />
    <AboutSection height={height} />
    <SliderSection height={height} />
    <HiringSection onOpenHiringPanel={onOpenHiringPanel} />
    <Footer />
  </div>
);
