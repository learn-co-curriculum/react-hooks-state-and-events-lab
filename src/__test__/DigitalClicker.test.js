import '@testing-library/jest-dom';
import { expect } from 'chai';
import React from 'react'
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'

import DigitalClicker from '../components/DigitalClicker';

Enzyme.configure({ adapter: new Adapter() })

describe('<DigitalClicker />', () => {
  const wrapper = shallow(<DigitalClicker />);

  it('should render a button', () => {
    expect(wrapper.find('button')).to.have.lengthOf(1);
  });

  it('should display the initial state of 0 in the button', () => {
    expect(wrapper.find('button').text()).to.contain("0");
  });

  it('should update the count when the button is clicked', () => {
    wrapper.find('button').simulate('click');
    expect(wrapper.find('button').text()).to.contain("1");
    wrapper.find('button').simulate('click');
    expect(wrapper.find('button').text()).to.contain("2");
  });
});
