import { fireEvent, render, screen } from '@testing-library/react';
import Popup from '../Popup';

if (import.meta.vitest) {
  const { it, describe, expect, afterEach, beforeEach, vi } = import.meta.vitest;

  const { toggleMock, useHomePopupMock } = vi.hoisted(() => ({
    toggleMock: vi.fn(),
    useHomePopupMock: vi.fn(),
  }));

  vi.mock('../../../../contexts/HomePopupContext/hooks', () => ({
    default: useHomePopupMock,
  }));

  beforeEach(() => {
    useHomePopupMock.mockReturnValue({
      toggle: toggleMock,
      isVisible: false,
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  describe('Popup tests', () => {
    it('Popup renders', () => {
      render(<Popup />);
      expect(screen.getByTestId(/close-button/)).toBeInTheDocument();
      expect(toggleMock).not.toBeCalled();
    });

    it('Popup renders and close button clicked', () => {
      render(<Popup />);
      const item = screen.getByTestId(/close-button/);
      fireEvent.click(item);
      expect(item).toBeInTheDocument();
      expect(toggleMock).toBeCalledTimes(1);
    });

    it('Popup renders and button clicked', () => {
      render(<Popup />);
      const item = screen.getByText('Some button');
      fireEvent.click(item);
      expect(item).toBeInTheDocument();
      expect(toggleMock).toBeCalledTimes(1);
    });

    it('Popup renders, isVisible set as true, popup-visible class added', () => {
      useHomePopupMock.mockReturnValueOnce({
        toggle: toggleMock,
        isVisible: true,
      });

      render(<Popup />);
      const item = screen.getByTestId(/popup-box/);
      expect(item).toBeInTheDocument();
      expect(item.classList.contains('popup--visible')).toBeTruthy();
      expect(toggleMock).not.toBeCalled();
    });

    it('Popup renders, isVisible set as true, popup-visible class not added', () => {
      useHomePopupMock.mockReturnValueOnce({
        toggle: toggleMock,
        isVisible: false,
      });

      render(<Popup />);
      const item = screen.getByTestId(/popup-box/);
      expect(item).toBeInTheDocument();
      expect(item.classList.contains('popup--visible')).toBeFalsy();
      expect(toggleMock).not.toBeCalled();
    });
  });
}
