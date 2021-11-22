import React from 'react';
import { render } from '@testing-library/react';
import ListedBy from './ListedBy';

let component;

beforeEach(() => {
  const { container } = render(<ListedBy />);
  component = container;
});

describe('Listing title component', () => {
  it('should be rendered', () => {
    expect(component.querySelector('.listed-by')).toBeInTheDocument();
  });
  it('should render propper text', () => {
    expect(component.querySelector('.listed-by').textContent.includes('Listed by')).toBeTruthy();
  });
});
