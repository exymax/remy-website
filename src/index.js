import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/Header';
import AboutSection from './components/AboutSection';
import SliderSection from './components/SliderSection';
import HiringSection from './components/HiringSection';
import Footer from './components/Footer';
import "~styles/app.scss";

const App = () => (
  <div id="root">
    <Header />
    <AboutSection />
    <SliderSection />
    <HiringSection />
    <Footer />
  </div>
);

ReactDOM.render(<App/>, document.getElementById('root'));
