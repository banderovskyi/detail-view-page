import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ListingContactUs from './ListingContactUs';

let component;
let getByTextFunc;

beforeEach(() => {
  const { container, getByText } = render(<ListingContactUs className="contact-us-test" />);
  component = container;
  getByTextFunc = getByText;
});

describe('ListingContactUs component', () => {
  it('should be rendered', () => {
    expect(component.querySelector('.contact-us-test')).toBeInTheDocument();
  });

  it('should renter a contact item', () => {
    expect(component.querySelector('.listing-contact-us__contact-item')).toBeInTheDocument();
  });
  it('should renter tabs', () => {
    expect(component.querySelector('.listing-contact-us__tabs')).toBeInTheDocument();
  });
  it('should change tabs content', () => {
    fireEvent.click(getByTextFunc('Schedule a Visit'));
    // Change it when the form component will be done
    expect(document.getElementById('aside-schedule')).toBeInTheDocument();
    fireEvent.click(getByTextFunc('Contact Us'));
    // Change it when the form component will be done
    expect(document.getElementById('aside-contact')).toBeInTheDocument();
  });
});
