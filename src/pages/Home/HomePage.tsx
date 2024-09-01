import HomePopupContextProvider from '../../contexts/HomePopupContext/HomePopupContext';
import BundlesSection from './BundlesSection';
import ContactSection from './ContactSection';
import CoursesSection from './CoursesSection';
import OffersSection from './OffersSection';
import Popup from './Popup';

export const HomePage = () => {
  return (
    <HomePopupContextProvider>
      <CoursesSection />
      <OffersSection />
      <BundlesSection />
      <ContactSection />
      <Popup />
    </HomePopupContextProvider>
  );
};

export default HomePage;
