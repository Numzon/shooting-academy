import CoursesSection from './CoursesSection';
import OffersSection from './OffersSection';

export const HomePage = () => {
  return (
    <>
      <CoursesSection />
      <OffersSection />
      {/* 
      composition pictures shold be scaled down (not:hover)
      <section>Pakiety z ceną na odwrocie karty (cards with imgs)</section>
      <section>Contact form + zapis do pocketbase</section> 
      */}
    </>
  );
};

export default HomePage;
