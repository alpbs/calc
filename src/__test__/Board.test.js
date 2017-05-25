import React from 'react';
import { shallow, mount, render } from 'enzyme';

import Board from '../components/Board';

describe('Test', function() {
  //const wrapper = shallow(<Board />);
  const wrapper = mount(<Board />);

  beforeEach(() => {
    wrapper.setState({value: ''});
  });

  it('Check number of buttons', function() {
    expect(wrapper.find('Cbutton').length).toBe(18);
  });

  it('Test button click', function() {
    wrapper.find('#btn-7').simulate('click');
    expect(wrapper.state().value).toBe('7');
  });

  it('Test sum', function() {
    wrapper.find('#btn-7').simulate('click');
    wrapper.find('#btn-plus').simulate('click');
    wrapper.find('#btn-3').simulate('click');
    wrapper.find('#btn-equal').simulate('click');
    expect(wrapper.state().value).toBe('10');
  });

  it('Test sub', function() {
    wrapper.find('#btn-7').simulate('click');
    wrapper.find('#btn-min').simulate('click');
    wrapper.find('#btn-3').simulate('click');
    wrapper.find('#btn-equal').simulate('click');
    expect(wrapper.state().value).toBe('4');
  });

  it('Test mult', function() {
    wrapper.find('#btn-7').simulate('click');
    wrapper.find('#btn-mult').simulate('click');
    wrapper.find('#btn-3').simulate('click');
    wrapper.find('#btn-equal').simulate('click');
    expect(wrapper.state().value).toBe('21');
  });

  it('Test div', function() {
    wrapper.find('#btn-9').simulate('click');
    wrapper.find('#btn-div').simulate('click');
    wrapper.find('#btn-3').simulate('click');
    wrapper.find('#btn-equal').simulate('click');
    expect(wrapper.state().value).toBe('3');
  });





});

