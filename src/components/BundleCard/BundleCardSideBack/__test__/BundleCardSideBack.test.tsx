import { fireEvent, render, screen } from '@testing-library/react';
import BundleCardSideBack from '../BundleCardSideBack';

if (import.meta.vitest) {
  const { it, describe, expect, afterEach, vi } = import.meta.vitest;

  const { toggleMock } = vi.hoisted(() => ({
    toggleMock: vi.fn(),
  }));

  vi.mock('../../../../contexts/HomePopupContext/hooks', () => ({
    default: () => ({
      toggle: toggleMock,
    }),
  }));

  afterEach(() => {
    vi.clearAllMocks();
  });

  describe('BundleCardSideBack tests', () => {
    it('BundleCardSideBack renders', () => {
      render(
        <BundleCardSideBack buttonVariant="primary" color="primary" price="324">
          <li>dummy text</li>
        </BundleCardSideBack>,
      );

      expect(screen.getByText('dummy text')).toBeInTheDocument();
      expect(toggleMock).not.toBeCalled();
    });

    it('BundleCardSideBack renders and clicked', () => {
      render(
        <BundleCardSideBack buttonVariant="primary" color="primary" price="324">
          <li>dummy text</li>
        </BundleCardSideBack>,
      );

      const item = screen.getByText('Show popup!');
      fireEvent.click(item);

      expect(item).toBeInTheDocument();
      expect(toggleMock).toBeCalledTimes(1);
    });
  });
}
