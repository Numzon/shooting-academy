import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import TextField from '../TextField';

if (import.meta.vitest) {
  const { it, describe, vi, afterEach, expect, beforeEach } = import.meta.vitest;

  const { useControllerMock, useFormContextMock } = vi.hoisted(() => ({
    useControllerMock: vi.fn(),
    useFormContextMock: vi.fn(),
  }));

  vi.mock('react-hook-form', () => ({
    useFormContext: useFormContextMock,
    useController: useControllerMock,
  }));

  beforeEach(() => {
    useFormContextMock.mockReturnValue({
      control: {},
    });

    useControllerMock.mockReturnValue({
      field: {
        ref: vi.fn(),
        value: undefined,
        name: 'some-name',
      },
      fieldState: {
        error: {
          message: '',
        },
        invalid: false,
      },
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  describe('TextField tests', () => {
    it('TextField renders ', () => {
      render(
        <TextField id="test" name="testname">
          TEST
        </TextField>,
      );
      expect(screen.getByRole('textbox')).toBeInTheDocument();
    });

    it('TextField input has valid value, invalid class name is not in the document', () => {
      render(
        <TextField id="test" name="name">
          TEST
        </TextField>,
      );

      const textField = screen.getByRole('textbox');

      expect(textField).toBeInTheDocument();
      expect(textField).not.toHaveClass('form__input--invalid');
    });

    it('TextField input has invalid value, invalid class name has been added, errorTextVisible is false, icon helper is visible', () => {
      useControllerMock.mockReturnValue({
        field: {
          ref: vi.fn(),
          value: undefined,
          name: 'some-name',
        },
        fieldState: {
          error: {
            message: 'some error message',
          },
          invalid: true,
        },
      });

      render(
        <TextField id="test" name="name">
          TEST
        </TextField>,
      );

      const textField = screen.getByRole('textbox');
      const iconHelper = screen.getByTestId(/helper-icon/);
      const iconBox = screen.getByTestId(/helper-box/);

      expect(textField).toBeInTheDocument();
      expect(textField).toHaveClass('form__input--invalid');
      expect(iconHelper).toBeInTheDocument();
      expect(iconHelper).toHaveClass('form__helper-icon--visible');
      expect(iconBox).toBeInTheDocument();
      expect(iconBox).not.toHaveClass('form__helper-box--visible');
    });

    it('TextField input has invalid value, helper icon has been clicked, icon doesnt have --visible class, but box has', () => {
      useControllerMock.mockReturnValue({
        field: {
          ref: vi.fn(),
          value: undefined,
          name: 'some-name',
        },
        fieldState: {
          error: {
            message: 'some error message',
          },
          invalid: true,
        },
      });

      render(
        <TextField id="test" name="name">
          TEST
        </TextField>,
      );

      const textField = screen.getByRole('textbox');
      const iconHelper = screen.getByTestId(/helper-icon/);
      const iconBox = screen.getByTestId(/helper-box/);

      fireEvent.click(iconHelper);

      expect(textField).toBeInTheDocument();
      expect(textField).toHaveClass('form__input--invalid');
      expect(iconHelper).toBeInTheDocument();
      expect(iconHelper).not.toHaveClass('form__helper-icon--visible');
      expect(iconBox).toBeInTheDocument();
      expect(iconBox).toHaveClass('form__helper-box--visible');
    });

    it('TextField input has invalid value, helper icon has been clicked, then box has been clicked, icon is visible, box is not', async () => {
      useControllerMock.mockReturnValue({
        field: {
          ref: vi.fn(),
          value: undefined,
          name: 'some-name',
        },
        fieldState: {
          error: {
            message: 'some error message',
          },
          invalid: true,
        },
      });

      render(
        <TextField id="test" name="name">
          TEST
        </TextField>,
      );

      const textField = screen.getByRole('textbox');
      const iconHelper = screen.getByTestId(/helper-icon/);
      const iconBox = screen.getByTestId(/helper-box/);

      await fireEvent.click(iconHelper);
      await fireEvent.click(iconBox);

      expect(textField).toBeInTheDocument();
      expect(textField).toHaveClass('form__input--invalid');
      expect(iconHelper).toBeInTheDocument();
      expect(iconHelper).toHaveClass('form__helper-icon--visible');
      expect(iconBox).toBeInTheDocument();
      expect(iconBox).not.toHaveClass('form__helper-box--visible');
    });
  });
}
