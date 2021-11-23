import React from 'react';
import { render } from '@testing-library/react';
import ListingCard from './ListingCard';

let component;

const item = {
  link: '/more-like-tihs/1',
  mls: '3213123',
  thumb: 'images/morelikethis/mlt-1.jpg',
  imgAlt: 'Alt',
  address: '186 Windswept Way, Barnstable, MA',
  price: '18,000,000',
  properties: [
    { type: 'Bed', value: '8' },
    { type: 'Bath', value: '8' },
    { type: 'Acr', value: '1' },
    { type: 'SqFt', value: '10,402' },
  ],
};

beforeEach(() => {
  const { container } = render(
    <ListingCard
      className="card-test"
      link={item.link}
      img={item.thumb}
      imgAlt={item.imgAlt}
      address={item.address}
      price={item.price}
      properties={item.properties}
    />
  );
  component = container;
});

describe('Listing card component', () => {
  it('should be rendered with props class', () => {
    expect(component.querySelector('.card-test')).toBeInTheDocument();
  });
  it('should render propper links', () => {
    expect(component.querySelector('.card-test .listing-card__thumb a').getAttribute('href')).toBe(
      '/more-like-tihs/1'
    );
    expect(
      component.querySelector('.card-test .listing-card__address a').getAttribute('href')
    ).toBe('/more-like-tihs/1');
  });
  it('should render propper image', () => {
    expect(component.querySelector('.card-test .listing-card__thumb img').getAttribute('src')).toBe(
      'images/morelikethis/mlt-1.jpg'
    );
    expect(component.querySelector('.card-test .listing-card__thumb img').getAttribute('alt')).toBe(
      'Alt'
    );
  });
  it('should render propper address', () => {
    expect(component.querySelector('.card-test .listing-card__address a').textContent).toBe(
      '186 Windswept Way, Barnstable, MA'
    );
  });
  it('should render propper price with currency', () => {
    expect(component.querySelector('.card-test .listing-card__price').textContent).toBe(
      '$18,000,000'
    );
  });
  it('should render all properties', () => {
    expect(component.querySelectorAll('.card-properties__item').length).toBe(
      item.properties.length
    );
  });
});
