import React from 'react';
import { shallow, configure, mount } from 'enzyme';
import Movies from './Movies.js'
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

// Test to check if Movies component renders correctly
describe('MoviesView', () => {
    it('retrieves the movieList render', () => {
      const wrapper = shallow(<Movies />);
      const view = wrapper.find('View').text();
      expect(view).toMatchSnapshot();
    });
});

// Test to check low and high cost for each movie

// Still TODO VVV

// describe('MoviesView', () => {
//     it('correctly renders low and high costs', () => {
//         const wrapper = mount(<Movies />);
//         const view = wrapper.find('Title').text();
//         expect(view).toMatchSnapshot();
//     });
// });
