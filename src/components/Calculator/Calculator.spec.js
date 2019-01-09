import React from 'react'
import {shallow} from 'enzyme'
import Calculator from './Calculator'
import Display from '../Display/Display'
import Keypad from '../Keypad/Keypad'

describe('Calculator', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Calculator />);
  });

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a <div />', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });

  it('should render the Display and Keypad Component', () => {
    expect(wrapper.containsMatchingElement(
      <Display displayValue={wrapper.instance().state.displayValue} />,
      <Keypad
        callOperator={wrapper.instance().state.callOperator}
        numbers={wrapper.instance().state.numbers}
        operators={wrapper.instance().state.operators}
        setOperators={wrapper.instance().setOperators}
        updateDisplay={wrapper.instance().updateDisplay}
      />
    )).toEqual(true);
  });
});
