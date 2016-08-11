import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import NumericLable from './component/numeric_label';

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
      'shortFormatMinValue': 100000,
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


    return(
			<div className='numeric-wrapper'>
      <h2>Numeric Lable Component</h2>
      <NumericLable params={option}>1243.2155</NumericLable><br/>
      <NumericLable params={option}>31243.2155</NumericLable><br/>
      <NumericLable params={option}>631243.2155</NumericLable><br/>
      <NumericLable params={option}>7631243.2155</NumericLable><br/>
      <NumericLable params={option}>77631243.2155</NumericLable><br/>
      <NumericLable params={option2}>977631243.2155</NumericLable><br/>
      <NumericLable params={option2}>9977631243.2155</NumericLable><br/>
      <NumericLable params={option}>19977631243.2155</NumericLable><br/>
      <NumericLable params={option}>119977631243.2155</NumericLable><br/>
      <NumericLable params={option}>5119977631243.2155</NumericLable><br/>
      <NumericLable params={option}>75119977631243.2155</NumericLable><br/>
      <NumericLable params={option}>975119977631243.2155</NumericLable><br/>
      <NumericLable params={option}>2975119977631243.2155</NumericLable><br/>
      <NumericLable params={option}>12975119977631243.2155</NumericLable><br/>
      <NumericLable params={option}>112975119977631243.2155</NumericLable><br/>
      <NumericLable params={option}>1112975119977631243.2155</NumericLable><br/>
      <NumericLable params={option3}>21112975119977631243.2155</NumericLable><br/>
      <NumericLable params={option3}>321112975119977631243.2155</NumericLable><br/>
      <NumericLable params={option}>6321112975119977631243.2155</NumericLable><br/>
      <NumericLable>123</NumericLable>
			</div>
		);
	}
}

ReactDOM.render(<App />,document.querySelector('.container'));
module.hot.accept();
