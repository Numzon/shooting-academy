import { render, screen } from '@testing-library/react';
import Column from '../Column';

if (import.meta.vitest) {
  const { it, expect, describe } = import.meta.vitest;

  describe('Column', () => {
    it('Column renders and sets children element', () => {
      const dummyText = 'dummy';

      render(<Column size="1">{dummyText}</Column>);

      expect(screen.getByText(dummyText)).toBeInTheDocument();
    });

    it('Column renders and sets right col size', () => {
      const dummyText = 'dummy';
      const colSize = '5';

      render(<Column size={colSize}>{dummyText}</Column>);

      expect(screen.getByText(dummyText)).toHaveClass(`col-${colSize}`);
    });

    it('Column renders and adds additional class name', () => {
      const additionalClass = 'additional-class';

      render(
        <Column size="11" className={additionalClass}>
          dummy
        </Column>,
      );

      expect(screen.getByText(/dummy/)).toHaveClass(additionalClass);
    });
  });
}
