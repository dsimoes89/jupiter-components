import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Button } from './index';

describe('Button', () => {
  it('renders correctly', () => {
    render(<Button>Click me</Button>);
    screen.debug();

    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('should be disabled when isLoading', () => {
    render(<Button isLoading={true}>Click me</Button>);
    screen.debug();

    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
  });

  it('should show a spinner icon when isLoading', () => {
    render(<Button isLoading={true}>Click me</Button>);
    screen.debug();

    const button = screen.getByTestId('spinner-icon');
    expect(button).toBeInTheDocument;
  });

  it('should not show a spinner icon when not isLoading', () => {
    render(<Button>Click me</Button>);
    screen.debug();

    const button = screen.queryByTestId('spinner-icon');
    expect(button).not.toBeInTheDocument;
  });
});
