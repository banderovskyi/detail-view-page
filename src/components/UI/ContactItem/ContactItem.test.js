import React from 'react';
import { render } from '@testing-library/react';
import ContactItem from './ContactItem';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

let component;

beforeEach(() => {
  const { container } = render(
    <ContactItem
      href="mailto:test@test.com"
      contact="test@test.com"
      icon={faTimes}
      className="contact-test"
    />
  );
  component = container;
});

describe('Contact item component', () => {
  it('should be rendered with props class', () => {
    expect(component.querySelector('.contact-test')).toBeInTheDocument();
  });
  it('should render a props icon', () => {
    expect(component.querySelector('.contact-test svg').getAttribute('data-icon')).toBe('times');
  });
  it('should render a props contact', () => {
    expect(component.querySelector('.contact-item__value a').getAttribute('href')).toBe(
      'mailto:test@test.com'
    );
    expect(component.querySelector('.contact-item__value a').textContent).toBe('test@test.com');
  });
});
