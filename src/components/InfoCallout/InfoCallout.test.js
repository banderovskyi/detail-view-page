import React from 'react';
import { render } from '@testing-library/react';
import InfoCallout from './InfoCallout';

let component;

beforeEach(() => {
  const { container } = render(<InfoCallout className="info-callout-test" />);
  component = container;
});

describe('InfoCallout component', () => {
  it('should be rendered with props class', () => {
    expect(component.querySelector('.info-callout-test')).toBeInTheDocument();
  });
  it('should render all parts', () => {
    expect(component.querySelector('.info-callout__price')).toBeInTheDocument();
    expect(component.querySelector('.info-callout__icon-list')).toBeInTheDocument();
    expect(component.querySelector('.info-callout__status')).toBeInTheDocument();
  });
});
