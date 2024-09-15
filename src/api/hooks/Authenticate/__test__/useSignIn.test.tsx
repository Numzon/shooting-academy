import { renderHook } from '@testing-library/react';
import { queryClient, QueryClientProvider } from '../../../../lib/react-query';
import { useSignIn } from '../useSignIn';

if (import.meta.vitest) {
  const { describe, it, expect, vi, beforeEach, afterEach } = import.meta.vitest;

  const { signInMock } = vi.hoisted(() => ({
    signInMock: vi.fn(),
  }));

  vi.mock('../../../requests/authenticate', () => ({
    signIn: signInMock,
  }));

  beforeEach(() => {
    signInMock.mockReturnValue({
      id: '',
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  describe('useSignIn', () => {
    it('useSignIn', async () => {
      const wrapper = ({ children }: { children: React.ReactNode }) => (
        <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
      );
      const { result } = renderHook(() => useSignIn(), { wrapper });

      await result.current.mutateAsync({
        email: '',
        confirmPassword: '',
        password: '',
        username: '',
      });

      expect(signInMock).toHaveBeenCalledOnce();
    });
  });
}
