import { render, screen, fireEvent } from '@testing-library/react';
import LinkItem from '../LinkItem';

if (import.meta.vitest) {
  const { it, describe, expect, vi, afterEach } = import.meta.vitest;

  const { pushMock } = vi.hoisted(() => ({
    pushMock: vi.fn(),
  }));

  vi.mock('../../../../../routes/hooks/useRouter', () => ({
    default: () => ({
      push: pushMock,
    }),
  }));

  afterEach(() => {
    vi.clearAllMocks();
  });

  describe('Footer - LinkItem', () => {
    it('Render LinkItem successfuly', () => {
      render(<LinkItem to="/random">dummy text</LinkItem>);

      expect(screen.getByRole('listitem')).toBeInTheDocument();
      expect(pushMock).not.toHaveBeenCalled();
    });

    it('Render LinkItem and successfuly fired event', () => {
      const text = 'dummy text';

      render(<LinkItem to="/random">{text}</LinkItem>);

      const item = screen.getByText(text);

      fireEvent.click(item);

      expect(item).toBeInTheDocument();
      expect(pushMock).toBeCalledTimes(1);
    });
  });
}
