import React from 'react';
import { render } from '@testing-library/react';
import Footer from './Footer';

describe('Footer component', () => {
  it('should be rendered', () => {
    const { container } = render(<Footer />);

    expect(container.querySelector('.footer')).toBeInTheDocument();
  });
});
