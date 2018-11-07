import React from 'react';
import ReactDOM from 'react-dom';

import Header from './containers/Header';
import AboutSection from './containers/AboutSection';
import SliderSection from './containers/SliderSection';
import HiringSection from './containers/HiringSection';
import Footer from './containers/Footer';

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
