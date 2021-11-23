import React from 'react';
import { render } from '@testing-library/react';
import DescriptionCard from './DescriptionCard';

let component;

beforeEach(() => {
  const { container } = render(
    <DescriptionCard className="description-test" title="Desc title" description="lorem" />
  );
  component = container;
});

describe('Description card component', () => {
  it('should be rendered with props class', () => {
    expect(component.querySelector('.description-test')).toBeInTheDocument();
  });
  it('should render a props title', () => {
    expect(component.querySelector('.description-card__title').textContent).toBe('Desc title');
  });
  it('should render a props text', () => {
    expect(component.querySelector('.description-card__text').textContent).toBe('lorem');
  });
});
