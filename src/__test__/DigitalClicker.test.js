import '@testing-library/jest-dom';
import { expect } from 'chai';
import React from 'react'
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'

import DigitalClicker from '../src/components/DigitalClicker';

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
