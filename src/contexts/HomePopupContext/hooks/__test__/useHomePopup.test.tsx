import { renderHook, waitFor } from '@testing-library/react';
import useHomePopup from '../useHomePopup';
import HomePopupContextProvider from '../../HomePopupContextProvider';
import React from 'react';

if (import.meta.vitest) {
  const { describe, it, expect, vi } = import.meta.vitest;

  describe('useHomePopup ', () => {
    it('useHomePopup without wrapper', () => {
      var errorMock = vi.spyOn(console, 'error');
      errorMock.mockImplementation(() => {});

      expect(() => renderHook(() => useHomePopup())).toThrowError();

      errorMock.mockRestore();
    });

    it('useHomePopup with wrapper', () => {
      const wrapper = ({ children }: { children: React.ReactNode }) => (
        <HomePopupContextProvider>{children}</HomePopupContextProvider>
      );
      const { result } = renderHook(() => useHomePopup(), { wrapper });
      expect(result.current.isVisible).toBeFalsy();
    });

    it('useHomePopup with wrapper and toggle function used', async () => {
      const wrapper = ({ children }: { children: React.ReactNode }) => (
        <HomePopupContextProvider>{children}</HomePopupContextProvider>
      );
      const { result } = renderHook(() => useHomePopup(), { wrapper });
      expect(result.current.isVisible).toBeFalsy();

      await waitFor(() => result.current.toggle());

      expect(result.current.isVisible).toBeTruthy();
    });
  });
}
