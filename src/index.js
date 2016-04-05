import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import NumericLable from './component/numeric_label';

class App extends Component {
	constructor(props){
		super(props);

	}

	render() {
    var option = {
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
		return(
			<div className='numeric-wrapper'>
      <h2>Numeric Lable Component</h2>
      <NumericLable params={option}>1243.2155</NumericLable>
      <NumericLable>123</NumericLable>
			</div>
		);
	}
}

ReactDOM.render(<App />,document.querySelector('.container'));
