/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import Clients from '../src/services/api';

it('renders correctly', () => {
  renderer.create(<App />);
});

it('test cases for getData', async () => {
  const response = await Clients.getData(1);
  expect(response.status).toBe(200);
});
