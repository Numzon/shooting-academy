import { renderHook } from '@testing-library/react';
import useNavigationCheckbox from '../useNavigationCheckbox';
import NavigationCheckboxContextProvider from '../../NavigationCheckboxContextProvider';
import React from 'react';

if (import.meta.vitest) {
  const { describe, it, expect, vi } = import.meta.vitest;

  describe('useNavigationCheckbox ', () => {
    it('useNavigationCheckbox without wrapper', () => {
      var errorMock = vi.spyOn(console, 'error');
      errorMock.mockImplementation(() => {});

      expect(() => renderHook(() => useNavigationCheckbox())).toThrowError();

      errorMock.mockRestore();
    });

    it('useNavigationCheckbox with wrapper', () => {
      const wrapper = ({ children }: { children: React.ReactNode }) => (
        <NavigationCheckboxContextProvider>{children}</NavigationCheckboxContextProvider>
      );
      const { result } = renderHook(() => useNavigationCheckbox(), { wrapper });
      expect(result.current.isChecked).toBeFalsy();
    });
  });
}
