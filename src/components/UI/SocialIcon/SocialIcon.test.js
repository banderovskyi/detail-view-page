import React from 'react';
import { render } from '@testing-library/react';
import SocialIcon from './SocialIcon';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

let component;

beforeEach(() => {
  const { container } = render(<SocialIcon className="test-icon" href="/test/" icon={faTimes} />);
  component = container;
});

describe('SocialIcon component', () => {
  it('should be rendered', () => {
    expect(component.querySelector('.test-icon')).toBeInTheDocument();
  });
  it('should render proper href', () => {
    expect(component.querySelector('.test-icon').getAttribute('href')).toBe('/test/');
  });
  it('should render proper icon', () => {
    expect(component.querySelector('.test-icon svg').getAttribute('data-icon')).toBe('times');
  });
});
