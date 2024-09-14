import { createSubscriber } from '../subscriber';

if (import.meta.vitest) {
  const { describe, it, expect, vi, beforeEach, afterEach } = import.meta.vitest;

  const { collectionMock, createMock } = vi.hoisted(() => ({
    collectionMock: vi.fn(),
    createMock: vi.fn(),
  }));

  vi.mock('../../../lib/pocketbase', () => ({
    default: {
      collection: collectionMock,
    },
  }));

  beforeEach(() => {
    collectionMock.mockReturnValue({
      create: createMock,
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  describe('createSubscriber ', () => {
    it('createSubscriber', () => {
      createSubscriber({ email: '', fullname: '', isRadioTrue: false });

      expect(collectionMock).toHaveBeenCalledOnce();
      expect(createMock).toHaveBeenCalledOnce();
    });
  });
}
