import { render } from '@testing-library/react';
import App from '../components/App';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

describe('testing app component', () => {
  test('checks if app renders', () => {
    const { asFragment } = render(<BrowserRouter><App /></BrowserRouter>)
    expect(asFragment()).toMatchSnapshot();
  })
});


