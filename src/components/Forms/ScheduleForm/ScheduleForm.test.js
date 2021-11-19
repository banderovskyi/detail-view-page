import React from 'react';
import { render } from '@testing-library/react';
import ScheduleForm from './ScheduleForm';

let component;

beforeEach(() => {
  const { container } = render(<ScheduleForm id="test-schedule-from" />);
  component = container;
});

describe('ScheduleForm form component', () => {
  it('should be rendered', () => {
    expect(component.querySelector('#test-schedule-from')).toBeInTheDocument();
  });
  it('should render should render necessary inputs', () => {
    expect(component.querySelector('input[name="Full Name"]')).toBeInTheDocument();
    expect(component.querySelector('input[name="Email"]')).toBeInTheDocument();
    expect(component.querySelector('input[name="Phone"]')).toBeInTheDocument();
    expect(component.querySelector('input[name="Date"]')).toBeInTheDocument();
    expect(component.querySelector('input[name="Time"]')).toBeInTheDocument();
    expect(component.querySelector('textarea[name="Message"]')).toBeInTheDocument();
  });
  it('should render a button with specific text', () => {
    expect(component.querySelector('button[type="submit"]')).toBeInTheDocument();
    expect(component.querySelector('button[type="submit"] .btn__text').textContent).toBe(
      'Schedule A Visit'
    );
  });
});
