import { render, screen } from '@testing-library/react';
import Row from '../Row';

if (import.meta.vitest) {
  const { it, expect, describe } = import.meta.vitest;

  describe('Row', () => {
    it('Row renders and sets children element', () => {
      const dummyText = 'dummy';

      render(<Row>{dummyText}</Row>);

      expect(screen.getByText(dummyText)).toBeInTheDocument();
    });
  });
}
