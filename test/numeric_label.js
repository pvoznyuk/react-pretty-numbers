import React from 'react';
import Expect from 'expect';
import Intl from 'intl';
import {createRenderer} from 'react-addons-test-utils';
import ExpectJSX from 'expect-jsx';
Expect.extend(ExpectJSX);

import NumericLabel from '../src/component/numeric_label';


describe('NumericLabel', () => {
  it('Number format', () => {
    let renderer = createRenderer();
    let number = 123;
    renderer.render(<NumericLabel>{number}</NumericLabel>);
    let result = renderer.getRenderOutput();
    Expect(result.props.children).toEqual('123');
  });

  it('Currency format', () => {
    let renderer = createRenderer();
    let number = 1243.2155;
    let options = {
      'justification':'C',
      'locales':'en-US',
      'currency':true,
      'currencyIndicator':'USD',
      'percentage':false,
      'precision':2,
      'wholenumber':null,
      'commafy':true,
      'cssClass':['red']
    };
    renderer.render(<NumericLabel params={options}>{number}</NumericLabel>);
    let result = renderer.getRenderOutput();
    Expect(result.props.children).toEqual('$1,243.22');
    Expect(result.props.style.textAlign).toEqual('center');
    Expect(result.props.className).toEqual('red ');
  });

  it('Whole Number format', () => {
    let renderer = createRenderer();
    let number = 122.33;
    let options = {
      'wholenumber':'ceil',
      'commafy':true
    };
    renderer.render(<NumericLabel params={options}>{number}</NumericLabel>);
    let result = renderer.getRenderOutput();
    Expect(result.props.children).toEqual('123');
  });

  it('Commafy Number format', () => {
    let renderer = createRenderer();
    let number = 122333;
    let options = {
      'commafy':false
    };
    renderer.render(<NumericLabel params={options}>{number}</NumericLabel>);
    let result = renderer.getRenderOutput();
    Expect(result.props.children).toEqual('122333');
    Expect(result.props.style.textAlign).toEqual('right');
  });
  it('percentage format', () => {
    let renderer = createRenderer();
    let number = 1.22;
    let options = {
      'percentage':true
    };
    renderer.render(<NumericLabel params={options}>{number}</NumericLabel>);
    let result = renderer.getRenderOutput();
    Expect(result.props.children).toEqual('122%');
  });
  it('left Justification test case', () => {
    let renderer = createRenderer();
    let number = 1222;
    let options = {
      'justification':'L'
    };
    renderer.render(<NumericLabel params={options}>{number}</NumericLabel>);
    let result = renderer.getRenderOutput();
    Expect(result.props.style.textAlign).toEqual('left');
  });
});
