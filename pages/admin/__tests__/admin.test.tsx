import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import AdminPage from '..';
import { api } from '../../_api';

global.fetch = jest.fn() as jest.Mock;

jest.mock('../../_api');
const mockedApi = api as jest.Mocked<typeof api>;

describe('Admin page', () => {
  beforeEach(() => {
    (fetch as jest.Mock).mockClear();
  });

  it('renders form fields', () => {
    render(<AdminPage />);

    expect(screen.getByLabelText(/Title/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Author/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Summary/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Content/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Create Post/i })).toBeInTheDocument();
  });

  it('handles form submission', async () => {
    mockedApi.post.mockResolvedValueOnce({ status: 201 });

    render(<AdminPage />);

    await userEvent.type(screen.getByLabelText(/Title/i), 'Test Title');
    await userEvent.type(screen.getByLabelText(/Author/i), 'Test Author');
    await userEvent.type(screen.getByLabelText(/Summary/i), 'Test Summary');
    await userEvent.type(screen.getByLabelText(/Content/i), 'Test Content');

    await userEvent.click(screen.getByRole('button', { name: /Create Post/i }));

    await waitFor(() => {
      expect(mockedApi.post).toHaveBeenCalledTimes(1);
      expect(mockedApi.post).toHaveBeenCalledWith('/posts', {
        title: 'Test Title',
        author: 'Test Author',
        summary: 'Test Summary',
        content: 'Test Content',
        date: "2025-02-02",
      });
    });
  });
})