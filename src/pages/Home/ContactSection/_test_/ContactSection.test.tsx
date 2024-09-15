import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import ContactSection from '../ContactSection';
import { queryClient, QueryClientProvider } from '../../../../lib/react-query';
import userEvent from '@testing-library/user-event';
import { toast } from 'sonner';

if (import.meta.vitest) {
  const { it, describe, expect, beforeEach, afterEach, vi } = import.meta.vitest;

  const { collectionMock, createMock } = vi.hoisted(() => ({
    collectionMock: vi.fn(),
    createMock: vi.fn(),
  }));

  vi.mock('../../../../lib/pocketbase', () => ({
    default: {
      collection: collectionMock,
    },
  }));

  vi.spyOn(toast, 'success');
  vi.spyOn(toast, 'error');

  beforeEach(() => {
    collectionMock.mockReturnValue({
      create: createMock,
    });

    createMock.mockReturnValue({
      id: 'some-id',
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  describe('ContactSection', () => {
    it('ContactSection renders', async () => {
      render(
        <QueryClientProvider client={queryClient}>
          <ContactSection />
        </QueryClientProvider>,
      );
      const form = screen.getByRole('form');

      expect(form).toBeInTheDocument();
    });

    it('ContactSection with filled & valid form', async () => {
      render(
        <QueryClientProvider client={queryClient}>
          <ContactSection />
        </QueryClientProvider>,
      );

      const user = userEvent.setup();
      const form = screen.getByRole('form');
      const fullname = screen.getByRole<HTMLInputElement>('textbox', { name: /full/i });
      const email = screen.getByRole<HTMLInputElement>('textbox', { name: /email/i });
      const radio = screen.getByRole<HTMLInputElement>('radio', { name: /true/i });

      await waitFor(() => user.type(email, 'tets@ds.pl'));
      await waitFor(() => user.type(fullname, 'Random Fullname'));
      await waitFor(() => user.click(radio));

      const button = screen.getByRole('button');
      await waitFor(() => fireEvent.click(button));

      expect(form).toBeInTheDocument();
      expect(radio).toBeChecked();
      expect(email).toHaveValue();
      expect(fullname).toHaveValue();
      expect(collectionMock).toHaveBeenCalled();
      expect(toast.success).toHaveBeenCalled();
      expect(toast.error).not.toHaveBeenCalled();
    });

    it('ContactSection with filled & valid form, create throws', async () => {
      var errorMock = vi.spyOn(console, 'error');
      errorMock.mockImplementation(() => {});
      collectionMock.mockReturnValueOnce({
        create: () => {
          throw new Error('some-error');
        },
      });

      render(
        <QueryClientProvider client={queryClient}>
          <ContactSection />
        </QueryClientProvider>,
      );

      const user = userEvent.setup();
      const form = screen.getByRole('form');
      const fullname = screen.getByRole<HTMLInputElement>('textbox', { name: /full/i });
      const email = screen.getByRole<HTMLInputElement>('textbox', { name: /email/i });
      const radio = screen.getByRole<HTMLInputElement>('radio', { name: /true/i });

      await waitFor(() => user.type(email, 'tets@ds.pl'));
      await waitFor(() => user.type(fullname, 'Random Fullname'));
      await waitFor(() => user.click(radio));

      const button = screen.getByRole('button');
      await waitFor(() => fireEvent.click(button));

      expect(form).toBeInTheDocument();
      expect(radio).toBeChecked();
      expect(email).toHaveValue();
      expect(fullname).toHaveValue();
      expect(collectionMock).toHaveBeenCalled();
      expect(toast.success).not.toHaveBeenCalled();
      expect(toast.error).toHaveBeenCalled();
    });
  });
}
