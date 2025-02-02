import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ReactNode } from 'react';
import Posts from '..';
import { mockPosts } from '../__mocks__/mockPosts';

jest.mock('next/link', () => {
  return ({ children, href }: { children: ReactNode; href: string }) => {
    return <a href={href}>{children}</a>;
  };
});

describe('Posts page', () => {
  it('renders blog posts', () => {
    render(<Posts posts={mockPosts} />);

    expect(screen.getByText('Recents Posts')).toBeInTheDocument();
    expect(screen.getByText('Test Post 1')).toBeInTheDocument();
    expect(screen.getByText('Test Post 2')).toBeInTheDocument();
    expect(screen.getByText('Test Summary')).toBeInTheDocument();
  });

  it('renders correct number of posts', () => {
    render(<Posts posts={mockPosts} />);
    const articles = screen.getAllByRole('link');
    expect(articles).toHaveLength(2);
  });
})