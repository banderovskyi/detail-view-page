import React from 'react';
import { render } from '@testing-library/react';
import HeaderContacts from './HeaderContacts';

let component;

const contactsItems = [
  { link: 'https://facebook.com/', title: 'Facebook' },
  { link: 'tel:1231231234', title: '+(123)1231234' },
  { link: 'mailto:test@test.com', title: 'Send us an email' },
];

beforeEach(() => {
  component = render(<HeaderContacts contacts={contactsItems} className="header-contacts-test" />);
});

describe('Header contacts component', () => {
  it('should be rendered with proper class name', () => {
    expect(component.container.querySelector('.header-contacts-test')).toBeInTheDocument();
  });
  it('should render the list items', () => {
    expect(component.container.querySelectorAll('li').length).toBe(contactsItems.length);
  });
  it('shouldnt render an icon for just links', () => {
    expect(component.container.querySelector('li:nth-child(1) svg')).not.toBeInTheDocument();
  });
  it('should render phone icon', () => {
    expect(component.container.querySelector('li:nth-child(2) svg[data-icon="phone"]')).toBeInTheDocument();
  });
  it('should render email icon', () => {
    expect(component.container.querySelector('li:nth-child(3) svg[data-icon="envelope"]')).toBeInTheDocument();
  });
});
