import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import PostDetails from '..';
import { mockPosts } from '../../__mocks__/mockPosts';

jest.mock('next/router', () => ({
  useRouter: () => ({
    isFallback: false,
  }),
}));

describe('Post details page', () => {
  it('renders post details', () => {
    render(<PostDetails post={mockPosts[0]} />);

    expect(screen.getByText('Test Post 1')).toBeInTheDocument();
    expect(screen.getByText(/Test Author/)).toBeInTheDocument();
    expect(screen.getByText('← Back to Posts')).toBeInTheDocument();
  });

  it('displays formatted date', () => {
    render(<PostDetails post={mockPosts[0]} />);
    expect(screen.getByText(/2025/)).toBeInTheDocument();
  });
})