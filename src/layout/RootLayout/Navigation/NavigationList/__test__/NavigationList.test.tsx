import { screen, render, fireEvent } from '@testing-library/react';
import { NavigationList } from '../NavigationList';

if (import.meta.vitest) {
  const { it, describe, expect, vi, afterEach, beforeEach } = import.meta.vitest;

  const { useNavigationCheckboxMock, useRouterMock, useAuthenticateMock, clearMock } = vi.hoisted(
    () => ({
      useAuthenticateMock: vi.fn(),
      clearMock: vi.fn(),
      useRouterMock: vi.fn(),
      useNavigationCheckboxMock: vi.fn(),
    }),
  );

  vi.mock('../../../../../contexts/AuthenticateContext/hooks/useAuthenticate', () => ({
    default: useAuthenticateMock,
  }));

  vi.mock('../../../../../routes/hooks/useRouter', () => ({
    default: useRouterMock,
  }));

  vi.mock('../../../../../contexts/NavigationCheckboxContext/hooks', () => ({
    default: useNavigationCheckboxMock,
  }));

  beforeEach(() => {
    useAuthenticateMock.mockReturnValue({
      isAuthenticated: false,
      clear: clearMock,
    });

    useRouterMock.mockReturnValue({
      push: vi.fn(),
    });

    useNavigationCheckboxMock.mockReturnValue({
      isChecked: false,
      setIsChecked: vi.fn(),
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  describe('NavigationList', () => {
    it('NavigationList properly rendered', () => {
      render(<NavigationList />);
      const ul = screen.getByRole('list');

      expect(ul).toBeInTheDocument();
      expect(clearMock).not.toHaveBeenCalled();
    });

    it('NavigationList - Logout event onClick fired', () => {
      useNavigationCheckboxMock.mockReturnValue({
        isChecked: true,
        setIsChecked: vi.fn(),
      });
      useAuthenticateMock.mockReturnValueOnce({
        isAuthenticated: true,
        clear: clearMock,
      });

      render(<NavigationList />);
      const item = screen.getByTestId('action-button-link');

      fireEvent.click(item);

      expect(item).toBeInTheDocument();
      expect(clearMock).toHaveBeenCalledOnce();
    });
  });
}
