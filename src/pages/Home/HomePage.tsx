import BundlesSection from './BundlesSection';
import ContactSection from './ContactSection';
import CoursesSection from './CoursesSection';
import OffersSection from './OffersSection';

export const HomePage = () => {
  return (
    <>
      <CoursesSection />
      <OffersSection />
      <BundlesSection />
      <ContactSection />
    </>
  );
};

export default HomePage;
