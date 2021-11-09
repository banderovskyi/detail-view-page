import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ListingTabCallout from './ListingTabCallout';

let component;
let getByTextFunc;
const items = [
  { name: 'foo', value: 'bar' },
  { name: 'foo1', value: 'bar1' },
];

beforeEach(() => {
  const { container, getByText } = render(
    <ListingTabCallout title="Test title" items={items} className="tabs-test" />
  );
  component = container;
  getByTextFunc = getByText;
});

describe('ListingTabCallout component', () => {
  it('should be rendered', () => {
    expect(component.querySelector('.tabs-test')).toBeInTheDocument();
  });
  it('should render a title', () => {
    expect(getByTextFunc('Test title')).toBeInTheDocument();
  });
  it('should list items', () => {
    expect(getByTextFunc('foo:')).toBeInTheDocument();
    expect(getByTextFunc('bar')).toBeInTheDocument();
    expect(getByTextFunc('foo1:')).toBeInTheDocument();
    expect(getByTextFunc('bar1')).toBeInTheDocument();
  });
});
