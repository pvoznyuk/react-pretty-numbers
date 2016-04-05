import React, { Component } from 'react';

const NumericLabel = (props) => {
    if(props.params) {
      var locales = props.params.locales;
      if(props.params.wholenumber == 'floor'){
        var number = Math.floor(props.children);
      }else if(props.params.wholenumber == 'ceil'){
          var number = Math.ceil(props.children);
      }else{
          var number = props.children;
      }

      var styles = 'right';
      if(props.params.justification == 'L') {
        styles = 'left';
      }
      else if(props.params.justification == 'C') {
        styles = 'center';
      }
      else{
        styles = 'right';
      }
      var mystyle = {
        'textAlign':styles
      }

      if(props.params.currencyIndicator) {
        var currencyIndicator = props.params.currencyIndicator
      }
      else {
        var currencyIndicator = 'AUD';
      }

      if(props.params.percentage){
          var option = {
            style:'percent',
            maximumFractionDigits:props.params.precision,
            useGrouping:props.params.commafy
          };
      }
      else if(props.params.currency){
          var option = {
            style:'currency',
            currency:currencyIndicator,
            maximumFractionDigits:props.params.precision,
            useGrouping:props.params.commafy
          };
      }
      else {
          var option = {
            style:'decimal',
            maximumFractionDigits:props.params.precision,
            useGrouping:props.params.commafy
          };
      }

      var css = '';
      if(props.params.cssClass) {
        props.params.cssClass.map((clas) => {
          css += clas + ' ';
        });
      }

    }
    else{
      var number = props.children;
      var locales = 'en-AU';
      var mystyle = {
        'textAlign':'right'
      }
      var option = {};
    }
    return(
        <div className={css} style={mystyle}>
        {Intl.NumberFormat(locales,option).format(number)}
        </div>
    );
}

export default NumericLabel;
