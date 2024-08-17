import { fireEvent, render, screen } from '@testing-library/react';
import NavigationItem from '../NavigationItem';

if (import.meta.vitest) {
  const { it, expect, describe, vi, afterEach } = import.meta.vitest;

  const { setIsCheckedMock, pushMock, useNavigationCheckboxMock } = vi.hoisted(() => ({
    setIsCheckedMock: vi.fn(),
    pushMock: vi.fn(),
    useNavigationCheckboxMock: vi.fn(),
  }));

  vi.mock('../../../../../../routes/hooks/useRouter', () => ({
    default: () => ({
      push: pushMock,
    }),
  }));

  vi.mock('../../../../../../contexts/NavigationCheckboxContext/hooks', () => ({
    default: useNavigationCheckboxMock,
  }));

  afterEach(() => {
    vi.clearAllMocks();
  });

  describe('NavigationItem', () => {
    it('NavigationItem renders properly', () => {
      useNavigationCheckboxMock.mockImplementationOnce(() => ({
        isChecked: false,
        setIsChecked: setIsCheckedMock,
      }));

      render(<NavigationItem to="/random">dummy text</NavigationItem>);

      expect(screen.getByRole('link')).toBeInTheDocument();
    });

    it('NavigationItem clicked but isChecked set as false', () => {
      useNavigationCheckboxMock.mockImplementationOnce(() => ({
        isChecked: false,
        setIsChecked: setIsCheckedMock,
      }));

      render(<NavigationItem to="/random">dummy text</NavigationItem>);
      const item = screen.getByRole('link');
      fireEvent.click(item);

      expect(item).toBeInTheDocument();
      expect(setIsCheckedMock).not.toHaveBeenCalled();
      expect(pushMock).not.toHaveBeenCalled();
    });

    it('NavigationItem clicked but isChecked set as true', () => {
      useNavigationCheckboxMock.mockImplementationOnce(() => ({
        isChecked: true,
        setIsChecked: setIsCheckedMock,
      }));

      render(<NavigationItem to="/random">dummy text</NavigationItem>);

      const item = screen.getByRole('link');
      fireEvent.click(item);

      expect(item).toBeInTheDocument();
      expect(setIsCheckedMock).toHaveBeenCalledOnce();
      expect(pushMock).toHaveBeenCalledOnce();
    });
  });
}
