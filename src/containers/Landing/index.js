import React from 'react';

import Header from '~components/Header';
import AboutSection from '~components/AboutSection';
import SliderSection from '~components/SliderSection';
import HiringSection from '~components/HiringSection';
import Footer from '~components/Footer';

export default ({ onOpenHiringPanel, height, width }) => (
  <div>
    <Header height={height} width={width} />
    <AboutSection height={height} />
    <SliderSection height={height} />
    <HiringSection
      height={height}
      onOpenHiringPanel={onOpenHiringPanel}
    />
    <Footer />
  </div>
);
