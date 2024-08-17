import { screen, render, fireEvent } from '@testing-library/react';
import { NavigationButton } from '../NavigationButton';

if (import.meta.vitest) {
  const { it, describe, expect, vi, afterEach } = import.meta.vitest;

  const { setIsCheckedMock } = vi.hoisted(() => ({
    setIsCheckedMock: vi.fn(),
  }));

  vi.mock('../../../../../contexts/NavigationCheckboxContext/hooks', () => ({
    default: () => ({
      isChecked: false,
      setIsChecked: setIsCheckedMock,
    }),
  }));

  afterEach(() => {
    vi.clearAllMocks();
  });

  describe('NavigationButton', () => {
    it('NavigationButton properly rendered', () => {
      render(<NavigationButton />);
      const checkbox = screen.getByRole('checkbox');

      expect(checkbox).not.toBeChecked();
      expect(setIsCheckedMock).not.toHaveBeenCalled();
    });

    it('NavigationButton event onChange fired', () => {
      render(<NavigationButton />);
      const checkbox = screen.getByRole('checkbox');
      const checkboxLabel = screen.getByTestId('checkbox-label');

      fireEvent.click(checkboxLabel);

      expect(checkbox).toBeInTheDocument();
      expect(setIsCheckedMock).toHaveBeenCalledOnce();
    });
  });
}
