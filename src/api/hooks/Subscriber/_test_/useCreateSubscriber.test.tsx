import { renderHook } from '@testing-library/react';
import { useCreateSubscriber } from '../useCreateSubscriber';
import { queryClient, QueryClientProvider } from '../../../../lib/react-query';

if (import.meta.vitest) {
  const { describe, it, expect, vi, beforeEach, afterEach } = import.meta.vitest;

  const { createSubscriberMock } = vi.hoisted(() => ({
    createSubscriberMock: vi.fn(),
  }));

  vi.mock('../../../requests/subscriber', () => ({
    createSubscriber: createSubscriberMock,
  }));

  beforeEach(() => {
    createSubscriberMock.mockReturnValue({
      id: '',
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  describe('createSubscriber', () => {
    it('createSubscriber', async () => {
      const wrapper = ({ children }: { children: React.ReactNode }) => (
        <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
      );
      const { result } = renderHook(() => useCreateSubscriber(), { wrapper });

      await result.current.mutateAsync({
        email: '',
        fullname: '',
        isRadioTrue: false,
      });

      expect(createSubscriberMock).toHaveBeenCalledOnce();
    });
  });
}
