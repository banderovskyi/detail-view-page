import React from 'react';
import { render } from '@testing-library/react';
import IconListItem from './IconListItem';

let component;

beforeEach(() => {
  const { container } = render(<IconListItem icon={{ icon: 'foo' }} title="foo" value="bar" />);
  component = container;
});

describe('IconListItem component', () => {
  it('should be rendered', () => {
    expect(component.querySelector('.icon-list-item')).toBeInTheDocument();
  });
  it('should render all parts', () => {
    expect(component.querySelector('.icon-list-item__icon')).toBeInTheDocument();
    expect(component.querySelector('.icon-list-item__title')).toBeInTheDocument();
    expect(component.querySelector('.icon-list-item__value')).toBeInTheDocument();
  });
  it('shouldnt render parts without props', () => {
    const componentWithoutProps = render(<IconListItem />).container;
    expect(componentWithoutProps.querySelector('.icon-list-item__icon')).toBeFalsy();
    expect(componentWithoutProps.querySelector('.icon-list-item__title')).toBeFalsy();
    expect(componentWithoutProps.querySelector('.icon-list-item__value')).toBeFalsy();
  });
});
