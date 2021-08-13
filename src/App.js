import React from 'react';
import Footer from './Footer';
import Header from './Header';
import LeftBox from './LeftBox';
import RightBoxMain from './RightBoxMain';

const App = () => {
  return (
    <div >
      <Header />
      <div style={{ paddingTop: '100px' }}>
        <LeftBox />
        <RightBoxMain />
        <Footer />
      </div>
    </div>
  );
};
export default App;