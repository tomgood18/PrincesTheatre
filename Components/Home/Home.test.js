import React from 'react';
import { shallow, configure } from 'enzyme';
import Home from './Home.js'
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

// Test to check if Home component renders correctly
describe('BaseView', () => {
    it('renders correctly', () => {
      const wrapper = shallow(<Home />);
      const view = wrapper.find('View').text();
      expect(view).toMatchSnapshot();
    });
  });