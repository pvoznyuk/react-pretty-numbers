import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Highlight from 'react-highlight.js';
import NumericLabel from './component/numeric_label';

const Panel = ({title, code, children}) =>
  <div className="panel panel-default">
    <div className="panel-heading">
      <h4 className="panel-title" role="presentation">
        { title }
      </h4>
    </div>
    <div className="panel-body">
      <h6>Code:</h6>
      <Highlight language={'jsx'}>
        {code}
      </Highlight>
      <h6>Output:</h6>
      {children}
    </div>
  </div>
;

class App extends Component {
	constructor(props){
		super(props);

	}

	render() {
    var option = {
      'justification':'L',
      'locales':'en-US',
      'currency':true,
      'currencyIndicator':'USD',
      'percentage':false,
      'precision':2,
      'wholenumber':null,
      'commafy':true,
      'cssClass':['red'],
      'shortFormat': true,
      'shortFormatMinValue': 10000,
      'shortFormatPrecision': 1,
      'title': true
    };

    var option2 = {
      'justification':'C',
      'locales':'en-US',
      'currency':false,
      'currencyIndicator':'USD',
      'percentage':true,
      'precision':0,
      'wholenumber':null,
      'commafy':true,
      'shortFormat': true,
      'title': 'some title'
    };

    var option3 = {
      'justification':'R',
      'locales':'uk-UA',
      'currency':false,
      'currencyIndicator':'UAH',
      'percentage':true,
      'precision':1,
      'wholenumber':false,
      'commafy':true,
      'shortFormat': false
    };

    const options1string = `const option = {
'justification': 'L',
'locales': 'en-US',
'currency':true,
'currencyIndicator': 'USD',
'percentage': false,
'precision': 2,
'wholenumber': null,
'commafy': true,
'cssClass': ['red'],
'shortFormat': true,
'shortFormatMinValue': 10000,
'shortFormatPrecision': 1,
'title': true
};`;

    return(
		<div className='numeric-wrapper'>
        <h1>React Pretty Numbers</h1>
        <p>Show pretty fomatted numbers</p>
        <p><a href="https://github.com/pvoznyuk/react-pretty-numbers">https://github.com/pvoznyuk/react-pretty-numbers</a></p>

        <Panel
          title="Currency"
          code={`<NumericLabel params={{currency: true, commafy:true, shortFormat: true, justification: 'L'}}>12345678.9012345</NumericLabel>`}>
          <NumericLabel params={{currency: true, commafy:true, shortFormat: true, justification: 'L'}}>12345678.9012345</NumericLabel><br/>
        </Panel>

        <Panel
          title="Percentage"
          code={`<NumericLabel params={{percentage: true, precision: 3, shortFormatPrecision: 3, justification: 'C'}}>12345678.9012345</NumericLabel>`}>
          <NumericLabel params={{percentage: true, precision: 3, shortFormatPrecision: 3, justification: 'C'}}>12345678.9012345</NumericLabel><br/>
        </Panel>

        <Panel
          title="Default behaviour"
          code={`<NumericLabel>12345678.9012345</NumericLabel>`}>
          <NumericLabel>12345678.9012345</NumericLabel><br/>
        </Panel>

        <Panel
          title="All possible options"
          code={`${options1string}

<NumericLabel params={option}>12345.6789</NumericLabel>
          `}>
          <NumericLabel params={option}>12345.6789</NumericLabel><br/>
        </Panel>

			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector('.container'));
module.hot.accept();
