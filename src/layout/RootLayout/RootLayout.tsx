import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import Navigation from './Navigation';

export const RootLayout = () => {
  return (
    <>
      <Header />
      <Navigation />
      <Main />
      <Footer />
    </>
  );
};

export default RootLayout;
