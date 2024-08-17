import { renderHook } from '@testing-library/react';
import useRouter from '../useRouter';
import React from 'react';

if (import.meta.vitest) {
  const { it, describe, expect, vi, afterEach } = import.meta.vitest;

  const { navigateMock, reloadMock } = vi.hoisted(() => ({
    navigateMock: vi.fn(),
    reloadMock: vi.fn(),
  }));

  vi.mock('react-router-dom', () => ({
    useNavigate: () => navigateMock,
  }));

  afterEach(() => {
    vi.clearAllMocks();
  });

  describe('useRouter', () => {
    it('useRouter render with mocked useNavigate', () => {
      const wrapper = ({ children }: { children: React.ReactNode }) => (
        <React.StrictMode>{children}</React.StrictMode>
      );
      const { result } = renderHook(() => useRouter(), { wrapper });

      expect(result).not.toBeNull();
    });

    it('useRouter back method runs navigate(-1)', () => {
      const wrapper = ({ children }: { children: React.ReactNode }) => (
        <React.StrictMode>{children}</React.StrictMode>
      );
      const { result } = renderHook(() => useRouter(), { wrapper });

      result.current.back();

      expect(navigateMock).toHaveBeenCalledOnce();
      expect(navigateMock.mock.lastCall?.at(0)).not.toBeNull();
      expect(navigateMock.mock.lastCall?.at(0)).toBe(-1);
      expect(result).not.toBeNull();
    });

    it('useRouter forward method runs navigate(1)', () => {
      const wrapper = ({ children }: { children: React.ReactNode }) => (
        <React.StrictMode>{children}</React.StrictMode>
      );
      const { result } = renderHook(() => useRouter(), { wrapper });

      result.current.forward();

      expect(navigateMock).toHaveBeenCalledOnce();
      expect(navigateMock.mock.lastCall?.at(0)).not.toBeNull();
      expect(navigateMock.mock.lastCall?.at(0)).toBe(1);
      expect(result).not.toBeNull();
    });

    it('useRouter push method runs navigate with given path', () => {
      const dummyPath = '/test';
      const wrapper = ({ children }: { children: React.ReactNode }) => (
        <React.StrictMode>{children}</React.StrictMode>
      );
      const { result } = renderHook(() => useRouter(), { wrapper });

      result.current.push(dummyPath);

      expect(navigateMock).toHaveBeenCalledOnce();
      expect(navigateMock.mock.lastCall?.at(0)).not.toBeNull();
      expect(navigateMock.mock.lastCall?.at(0)).toBe(dummyPath);
      expect(result).not.toBeNull();
    });

    it('useRouter reload uses window.location.reload', () => {
      Object.defineProperty(window, 'location', {
        value: {
          reload: reloadMock,
        },
      });

      const wrapper = ({ children }: { children: React.ReactNode }) => (
        <React.StrictMode>{children}</React.StrictMode>
      );
      const { result } = renderHook(() => useRouter(), { wrapper });

      result.current.reload();

      expect(navigateMock).not.toHaveBeenCalled();
      expect(reloadMock).toHaveBeenCalledOnce();
      expect(result).not.toBeNull();
    });

    it('useRouter push method runs navigate with given path', () => {
      const dummyPath = '/test';
      const wrapper = ({ children }: { children: React.ReactNode }) => (
        <React.StrictMode>{children}</React.StrictMode>
      );
      const { result } = renderHook(() => useRouter(), { wrapper });

      result.current.replace(dummyPath);

      expect(navigateMock).toHaveBeenCalledOnce();
      expect(navigateMock.mock.lastCall?.length).toBe(2);
      expect(navigateMock.mock.lastCall?.at(0)).not.toBeNull();
      expect(navigateMock.mock.lastCall?.at(1)).not.toBeNull();
      expect(navigateMock.mock.lastCall?.at(0)).toBe(dummyPath);
      expect(result).not.toBeNull();
    });
  });
}
