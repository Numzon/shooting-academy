import BundlesSection from './BundlesSection';
import CoursesSection from './CoursesSection';
import OffersSection from './OffersSection';

export const HomePage = () => {
  return (
    <>
      <CoursesSection />
      <OffersSection />
      <BundlesSection />
      {/* 
      <section>Pakiety z ceną na odwrocie karty (cards with imgs)</section>
      <section>Contact form + zapis do pocketbase</section> 
      */}
    </>
  );
};

export default HomePage;
