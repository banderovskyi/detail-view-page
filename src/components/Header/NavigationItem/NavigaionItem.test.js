import React from 'react';
import { render } from '@testing-library/react';
import NavigaionItem from './NavigaionItem';
import { Provider } from 'react-redux';
import { store } from '../../../app/store';

let component;

beforeEach(() => {
  component = render(
    <Provider store={store}>
      <NavigaionItem className={'tested-nav-item'} />
    </Provider>
  );
});

describe('NavigaionItem component', () => {
  it('should be rendered', () => {
    expect(
      component.container.querySelector('.tested-nav-item')
    ).toBeInTheDocument();
  });
});
