import React from 'react';
import { shallow } from 'enzyme';

import DigitalClicker from '../components/DigitalClicker';
import YouTubeDebugger from '../components/YouTubeDebugger';

function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

describe('<DigitalClicker />', function () {
  it('should have the correct initial state', function () {
    const wrapper = shallow(<DigitalClicker />);
    expect(wrapper.state().timesClicked).toNotEqual(undefined, 'The `timesClicked` property does not exist in the state');
    expect(wrapper.state().timesClicked).toBeA('number').toEqual(0, 'The `timesClicked` property does have the right value');
  });

  it('should update the count when the button is clicked', function () {
    const wrapper = shallow(<DigitalClicker />);
    wrapper.find('button').simulate('click');
    expect(wrapper.state().timesClicked).toEqual(1);
    wrapper.find('button').simulate('click');
    expect(wrapper.state().timesClicked).toEqual(2);
  });

  it('should update the button label when the state changes', function () {
    const wrapper = shallow(<DigitalClicker />);

    wrapper.find('button').simulate('click');
    wrapper.update();
    expect(wrapper.find('button').text()).toEqual('1');

    wrapper.find('button').simulate('click');
    wrapper.update();
    expect(wrapper.find('button').text()).toEqual('2');
  });
});

describe('<YouTubeDebugger />', function () {
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

  it('should have the correct initial state', function () {
    const wrapper = shallow(<YouTubeDebugger />);
    expect(wrapper.state()).toEqual(BASE_STATE);
  });

  it('should update the bitrate when the `.bitrate` button is clicked', function () {
    const wrapper = shallow(<YouTubeDebugger />);
    const expectedState = deepClone(BASE_STATE);
    expectedState.settings.bitrate = 12;

    wrapper.find('.bitrate').simulate('click');

    expect(wrapper.state()).toEqual(expectedState);
  });

  it('should update the video resolution when the `.resolution` button is clicked', function () {
    const wrapper = shallow(<YouTubeDebugger />);
    const expectedState = deepClone(BASE_STATE);
    expectedState.settings.video.resolution = '720p';

    wrapper.find('.resolution').simulate('click');

    expect(wrapper.state()).toEqual(expectedState);
  });
});
