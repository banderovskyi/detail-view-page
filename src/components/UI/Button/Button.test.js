import React from 'react';
import { render } from '@testing-library/react';
import Button from './Button';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

let component;

beforeEach(() => {
  const { container } = render(
    <Button icon={faTimes} text="test" type="button" isDisabled={true} />
  );
  component = container;
});

describe('Button component', () => {
  it('should be rendered', () => {
    expect(component.querySelector('.btn')).toBeInTheDocument();
  });
  it('should render a props text', () => {
    expect(component.querySelector('.btn').textContent).toBe('test');
  });
  it('should render a props icon', () => {
    expect(component.querySelector('.btn svg').getAttribute('data-icon')).toBe('times');
  });
  it('should have type from props', () => {
    expect(component.querySelector('.btn').getAttribute('type')).toBe('button');
  });
  it('should be disabled', () => {
    expect(component.querySelector('.btn').disabled).toBeTruthy();
  });
});
