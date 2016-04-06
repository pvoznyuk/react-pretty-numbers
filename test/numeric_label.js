import React from 'react';
import Expect from 'expect';
import Intl from 'intl';
import {createRenderer} from 'react-addons-test-utils';
// import ExpectJSX from 'expect-jsx';
// Expect.extend(ExpectJSX);

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
    let number = 12233;
    let options = {
      'justification':'C',
      'locales':'en-AU',
      'currency':true,
      'currencyIndicator':'AUD',
      'percentage':false,
      'precision':2,
      'wholenumber':null,
      'commafy':true,
      'cssClass':['red']
    };
    renderer.render(<NumericLabel params={options}>{number}</NumericLabel>);
    let result = renderer.getRenderOutput();
    Expect(result.props.children).toEqual('$12,233.00');
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
  });


});
