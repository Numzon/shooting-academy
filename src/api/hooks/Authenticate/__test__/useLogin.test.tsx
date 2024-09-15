import { renderHook } from '@testing-library/react';
import { queryClient, QueryClientProvider } from '../../../../lib/react-query';
import { useLogin } from '../useLogin';

if (import.meta.vitest) {
  const { describe, it, expect, vi, beforeEach, afterEach } = import.meta.vitest;

  const { loginMock } = vi.hoisted(() => ({
    loginMock: vi.fn(),
  }));

  vi.mock('../../../requests/authenticate', () => ({
    login: loginMock,
  }));

  beforeEach(() => {
    loginMock.mockReturnValue({
      token: '',
      record: {
        id: '',
        username: '',
        email: '',
      },
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  describe('useLogin', () => {
    it('useLogin', async () => {
      const wrapper = ({ children }: { children: React.ReactNode }) => (
        <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
      );
      const { result } = renderHook(() => useLogin(), { wrapper });

      await result.current.mutateAsync({
        email: '',
        password: '',
      });

      expect(loginMock).toHaveBeenCalledOnce();
    });
  });
}
