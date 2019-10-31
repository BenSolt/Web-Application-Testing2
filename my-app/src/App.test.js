import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as rtl from '@testing-library/react';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});


test('Strike button is rendering', () => {
  const container = rtl.render(<Dashboard />)
  console.log(container);
})

test('contains hit', () => {
  const {getByText} = rtl.render(<App/>);
  getByText(/hit/i);
})

test('contains foul', () => {
  const {getByText} = rtl.render(<App/>);
  getByText(/foul/i);
})

test('contains baseball', () => {
  const {getByText} = rtl.render(<App/>);
  getByText(/baseball/i);
})

test('contains strikes', () => {
  const {getByText} = rtl.render(<App/>);
  getByText(/strikes/i);
})