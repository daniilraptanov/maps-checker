import React, { FC } from 'react';
import Container from './base/Container';
import Footer from './base/Footer';
import Header from './base/Header';

const App: FC = () => {
  return (
    <>
      <Header />
      <Container />
      <Footer />
    </>
  );
};

export default App;
