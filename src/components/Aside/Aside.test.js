import React from 'react';
import { render } from '@testing-library/react';
import Aside from './Aside';
import { Provider } from 'react-redux';
import { store } from '../../app/store';

let component;

beforeEach(() => {
  const { container } = render(
    <Provider store={store}>
      <Aside className="aside-test" />
    </Provider>
  );
  component = container;
});

describe('Aside title component', () => {
  it('should be rendered with props class', () => {
    expect(component.querySelector('.aside-test')).toBeInTheDocument();
  });
  it('should render a toolbar', () => {
    expect(component.querySelector('.toolbar')).toBeInTheDocument();
  });
  it('should render a title', () => {
    expect(component.querySelector('.listing-title')).toBeInTheDocument();
  });
  it('should render a info-callout', () => {
    expect(component.querySelector('.info-callout')).toBeInTheDocument();
  });
  it('should render a listing detail', () => {
    expect(component.querySelector('.listing-detail')).toBeInTheDocument();
  });
  it('should render a listing tabs', () => {
    expect(component.querySelector('.listing-tabs')).toBeInTheDocument();
  });
  it('should render a listing map', () => {
    expect(component.querySelector('.aside__map')).toBeInTheDocument();
  });
  it('should render a listing contact us', () => {
    expect(component.querySelector('.listing-contact-us')).toBeInTheDocument();
  });
  it('should render a listing contact us', () => {
    expect(component.querySelector('.listing-contact-us')).toBeInTheDocument();
  });
  it('should render a listing subscribe form', () => {
    expect(component.querySelector('.listing-subscribe')).toBeInTheDocument();
  });
  it('should render a listing feed info', () => {
    expect(component.querySelector('.aside__feed-info')).toBeInTheDocument();
  });
});
