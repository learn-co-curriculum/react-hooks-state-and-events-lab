import '@testing-library/jest-dom';
import { expect } from 'chai';
import React from 'react'
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'

import YouTubeDebugger from '../components/YouTubeDebugger';

Enzyme.configure({ adapter: new Adapter() })

describe('<YouTubeDebugger />', () => {
  const wrapper = shallow(<YouTubeDebugger />);

  it('has a button with the class of "bitrate"', () => {
    expect(wrapper.find('.bitrate')).to.have.lengthOf(1);
  });

  it('displays the initial bitrate inside the button', () => {
    expect(wrapper.find('.bitrate').text()).to.contain("8");
  });

  it('should update the bitrate to 12 when the `.bitrate` button is clicked', () => {
    wrapper.find('.bitrate').simulate('click');
    expect(wrapper.find('.bitrate').text()).to.contain("12");
  });

  it('has a button with the class of "resolution"', () => {
    expect(wrapper.find('.resolution')).to.have.lengthOf(1);
  });

  it('displays the initial resolution inside the button', () => {
    expect(wrapper.find('.resolution').text()).to.contain("1080p");
  });

  it('should update the resolution to 720p when the `.resolution` button is clicked', () => {
    wrapper.find('.resolution').simulate('click');
    expect(wrapper.find('.resolution').text()).to.contain("720p");
  });
});
