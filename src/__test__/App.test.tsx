import { render, screen } from '@testing-library/react';
import App from '../App';

if (import.meta.vitest) {
  const { describe, it, expect } = import.meta.vitest;

  describe('A truthy statement', () => {
    it('should be equal to 2', () => {
      expect(1 + 1).toEqual(2);
    });
  });

  describe('App', () => {
    it('Renders the App component', () => {
      render(<App />);

      expect(screen.getByText('Lorem')).toBeInTheDocument();
    });
  });
}
