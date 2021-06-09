import React from 'react';
import { shallow, configure } from 'enzyme';
import App from './App.js'
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

// Test to check if App renders correctly
describe('AppView', () => {
    it('renders correctly', () => {
      const wrapper = shallow(<App />);
      const view = wrapper.find('Home').text();
      expect(view).toMatchSnapshot();
    });
});