import React from 'react';
import { expect } from 'chai';
import Enzyme, { shallow } from 'enzyme';

import DigitalClicker from '../src/components/DigitalClicker';
import YouTubeDebugger from '../src/components/YouTubeDebugger';

import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() })

const deepClone = obj => JSON.parse(JSON.stringify(obj));

describe('<DigitalClicker />', () => {
  it('should have the correct initial state', () => {
    const wrapper = shallow(<DigitalClicker />);
    expect(wrapper.state().timesClicked).to.not.equal(undefined, 'The `timesClicked` property does not exist in the state');
    expect(wrapper.state().timesClicked).to.be.a('number').to.equal(0, 'The `timesClicked` property does have the right value');
  });

  it('should update the count when the button is clicked', () => {
    const wrapper = shallow(<DigitalClicker />);
    wrapper.find('button').simulate('click');
    expect(wrapper.state().timesClicked).to.equal(1);
    wrapper.find('button').simulate('click');
    expect(wrapper.state().timesClicked).to.equal(2);
  });

  it('should update the button label when the state changes', () => {
    const wrapper = shallow(<DigitalClicker />);

    wrapper.find('button').simulate('click');
    wrapper.update();
    expect(wrapper.find('button').text()).to.equal('1');

    wrapper.find('button').simulate('click');
    wrapper.update();
    expect(wrapper.find('button').text()).to.equal('2');
  });
});

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
