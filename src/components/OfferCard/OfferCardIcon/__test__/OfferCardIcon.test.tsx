import { render } from '@testing-library/react';
import OfferCardIcon from '../OfferCardIcon';

if (import.meta.vitest) {
  const { it, expect, describe } = import.meta.vitest;

  describe('OfferCardIcon', () => {
    it('Renders OfferCardIcon', () => {
      const { container } = render(<OfferCardIcon icon="icon-basic-laptop" />);

      expect(container.firstChild).toHaveClass('offer-card__icon');
    });

    it('Renders OfferCardIcon with valid icon class', () => {
      const { container } = render(<OfferCardIcon icon="icon-basic-laptop" />);

      expect(container.firstChild).toHaveClass('icon-basic-laptop');
    });

    it('Renders OfferCardIcon with additional class', () => {
      const additionalClass = 'additional-class';
      const { container } = render(
        <OfferCardIcon icon="icon-basic-laptop" className={additionalClass} />,
      );

      expect(container.firstChild).toHaveClass(additionalClass);
    });
  });
}
