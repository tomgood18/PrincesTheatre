import React from 'react';
import { shallow, configure, mount } from 'enzyme';
import Movies from './Movies.js'
import Adapter from 'enzyme-adapter-react-16';
import { greaterThan } from 'react-native-reanimated';

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
describe('MoviesView', () => {
    it('correctly renders low and high costs', () => {
        const wrapper = mount(<Movies />);
        const value = wrapper.find(".card").text();
        expect(value).toMatchSnapshot();
    });
});

// it("contains users account email", () => {
//     const wrapper = mount(<Account user={user} />);
//     const value = wrapper.find("p").text();
//     expect(value).toEqual("david@gmail.com");
//   });
