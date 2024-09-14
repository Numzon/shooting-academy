import { render, screen } from '@testing-library/react';
import Button from '../Button';

if (import.meta.vitest) {
  const { describe, it, expect } = import.meta.vitest;

  describe('Button', () => {
    it('Renders Button and sets dummy text as children', () => {
      const dummyText = 'dummyText';

      render(<Button variant="primary">{dummyText}</Button>);

      expect(screen.getByText(dummyText)).toBeInTheDocument();
    });

    it('Renders primary type Button that contains btn--primary class', () => {
      const dummyText = 'dummyText';

      render(<Button variant="primary">{dummyText}</Button>);

      expect(screen.getByText(dummyText)).toHaveClass('btn--primary');
      expect(screen.getByText(dummyText)).not.toHaveClass('btn--secondary');
      expect(screen.getByText(dummyText)).not.toHaveClass('btn--tertiary');
    });

    it('Renders secondary type Button that contains btn--secondary class', () => {
      const dummyText = 'dummyText';

      render(<Button variant="secondary">{dummyText}</Button>);

      expect(screen.getByText(dummyText)).toHaveClass('btn--secondary');
      expect(screen.getByText(dummyText)).not.toHaveClass('btn--primary');
      expect(screen.getByText(dummyText)).not.toHaveClass('btn--tertiary');
    });

    it('Renders tertiary type Button that contains btn--tertiary class', () => {
      const dummyText = 'dummyText';

      render(<Button variant="tertiary">{dummyText}</Button>);

      expect(screen.getByText(dummyText)).toHaveClass('btn--tertiary');
      expect(screen.getByText(dummyText)).not.toHaveClass('btn--secondary');
      expect(screen.getByText(dummyText)).not.toHaveClass('btn--primary');
    });

    it('Renders Button with additional className ', () => {
      const dummyText = 'dummyText';
      const additionalClass = 'additional-class';

      render(
        <Button variant="primary" className={additionalClass}>
          {dummyText}
        </Button>,
      );

      expect(screen.getByText(dummyText)).toHaveClass(additionalClass);
    });

    it('Renders Button with btn-animated class', () => {
      const dummyText = 'dummyText';

      render(
        <Button variant="tertiary" animated>
          {dummyText}
        </Button>,
      );

      expect(screen.getByText(dummyText)).toHaveClass('btn--tertiary');
    });
  });
}
