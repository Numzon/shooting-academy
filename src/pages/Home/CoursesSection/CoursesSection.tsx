import HeadingPrimary from '../../../components/HeadingPrimary';
import Composition from './Composition';
import Information from './Information';

export const CoursesSection = () => {
  return (
    <section className="courses-section">
      <div className="row">
        <div className="cal-12">
          <div className="u-margin-bottom-huge">
            <HeadingPrimary>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit
            </HeadingPrimary>
          </div>
        </div>
        <div className="col-6">
          <Information />
        </div>
        <div className="col-6">
          <Composition />
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
