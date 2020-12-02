import '@testing-library/jest-dom';
import { expect } from 'chai';
import React from 'react'
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'

import YouTubeDebugger from '../src/components/YouTubeDebugger';

Enzyme.configure({ adapter: new Adapter() })

const deepClone = obj => JSON.parse(JSON.stringify(obj));

describe('<YouTubeDebugger />', () => {
  const BASE_STATE = {
    errors: [],
    user: null,
    settings: {
      bitrate: 8,
      video: {
        resolution: '1080p'
      }
    }
  };

  it('should have the correct initial state', () => {
    const wrapper = shallow(<YouTubeDebugger />);
    expect(wrapper.state()).to.deep.equal(BASE_STATE);
  });

  it('should update the bitrate when the `.bitrate` button is clicked', () => {
    const wrapper = shallow(<YouTubeDebugger />);
    const expectedState = deepClone(BASE_STATE);
    expectedState.settings.bitrate = 12;

    wrapper.find('.bitrate').simulate('click');

    expect(wrapper.state()).to.deep.equal(expectedState);
  });

  it('should update the video resolution when the `.resolution` button is clicked', () => {
    const wrapper = shallow(<YouTubeDebugger />);
    const expectedState = deepClone(BASE_STATE);
    expectedState.settings.video.resolution = '720p';

    wrapper.find('.resolution').simulate('click');

    expect(wrapper.state()).to.deep.equal(expectedState);
  });
});
