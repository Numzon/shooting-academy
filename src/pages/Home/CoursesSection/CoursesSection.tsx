import HeadingPrimary from '../../../components/HeadingPrimary';
import Composition from './Composition';
import Information from './Information';
import { Row, Column } from '../../../components/Grid';

export const CoursesSection = () => {
  return (
    <section className="courses-section">
      <Row>
        <Column size="12">
          <div className="u-margin-bottom-huge">
            <HeadingPrimary>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit
            </HeadingPrimary>
          </div>
        </Column>
        <Column size="6">
          <Information />
        </Column>
        <Column size="6">
          <Composition />
        </Column>
      </Row>
    </section>
  );
};

export default CoursesSection;
