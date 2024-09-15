import { signIn, login } from '../authenticate';

if (import.meta.vitest) {
  const { describe, it, expect, vi, beforeEach, afterEach } = import.meta.vitest;

  const { collectionMock, createMock, authWithPasswordMock } = vi.hoisted(() => ({
    collectionMock: vi.fn(),
    createMock: vi.fn(),
    authWithPasswordMock: vi.fn(),
  }));

  vi.mock('../../../lib/pocketbase', () => ({
    default: {
      collection: collectionMock,
    },
  }));

  beforeEach(() => {
    collectionMock.mockReturnValue({
      create: createMock,
      authWithPassword: authWithPasswordMock,
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  describe('signIn ', () => {
    it('signIn', () => {
      signIn({ email: '', password: '', confirmPassword: '', username: '' });

      expect(collectionMock).toHaveBeenCalledOnce();
      expect(createMock).toHaveBeenCalledOnce();
    });
  });

  describe('login ', () => {
    it('login', () => {
      login({ email: '', password: '' });

      expect(collectionMock).toHaveBeenCalledOnce();
      expect(authWithPasswordMock).toHaveBeenCalledOnce();
    });
  });
}
