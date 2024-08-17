import { render, screen, fireEvent } from '@testing-library/react';
import Logo from '../Logo';

if (import.meta.vitest) {
  const { it, expect, describe, vi, afterEach } = import.meta.vitest;

  const { pushMock } = vi.hoisted(() => {
    return { pushMock: vi.fn() };
  });

  vi.mock('../../../../../routes/hooks/useRouter', () => ({
    default: () => ({
      push: pushMock,
    }),
  }));

  afterEach(() => {
    vi.clearAllMocks();
  });

  describe('Logo', () => {
    it('Logo renders - no event fired', () => {
      render(<Logo />);

      expect(screen.getByRole('img')).toBeInTheDocument();
      expect(pushMock).not.toHaveBeenCalled();
    });

    it('Logo renders event fired', () => {
      render(<Logo />);

      const img = screen.getByRole('img');
      fireEvent.click(img);
      expect(img).toBeInTheDocument();
      expect(pushMock).toBeCalledTimes(1);
    });
  });
}
