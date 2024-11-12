import * as React from 'react';
import Footer from './components/Footer/Footer';
import Container from './components/Container/Container';
import Header from './components/Header/Header';

interface IAppProps {}

const App: React.FunctionComponent<IAppProps> = () => {
  return (
    <>
      <Header />
      <Container />
      <Footer />
    </>
  );
};

export default App;
