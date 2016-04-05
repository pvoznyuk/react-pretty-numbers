# React Component - NumericLabel

## Description:

This is a react component to display numeric data, in it's various formats. These may include currencies, percentages and large numbers.

## Usage:

A minimal usage will just display the numeric value

```
let myNumber = 123;
<NumericLabel>{myNumber}</NumericLabel>;
```

Other options can be passed in as `params` like so:

```
let params = {
  justification: 'L',
  locales : 'en-AU'
  currency: true,
  currencyIndicator: 'USD$',
  percentage: false,
  precision: 2,
  commafy: false
  cssClass: ['class1', 'class2']
};
<NumericLabel params=params>123</NumericLabel>;
```

### Params in more detail:

#### justification

* Optional parameter to justify text

| Value         | Description | Default  |
| ------------- |-------------| ---------|
| `L`             | Left justified |  |
| `R`             | Right justified| *|
| `C`             | Centered       |  |

#### locales

* Optional parameter to provide locale

Default to 'en-AU'

#### currency

* Optional parameter to provide currency format for numbers

| Value         | Description       |
| ------------- |-----------        |
| `true`        | to include text dollar sign and 2 decimals eg: 'usd $0.00'       |
| `false`       | to have no format eg: '0.00'         |

#### currencyIndicator

* Optional parameter to provide currency indicator

if the `currency:` parameter is set to `true` and no value is supplied here, default to a dollar sign `$`

#### percentage

* Optional parameter to provide percentage format for numbers

| Value         | Description
| ------------- |-----------
| `true`        | to have 2 decimals and include a percentage sign eg: '00.00%'
| `false`       | not format eg: '0.00'

#### precision

* Optional parameter to provide number of decimal places

| Value         | Description
| ------------- |-----------
| `Integer x`   | to round to `x` decimal places
| `nil`         | no rounding

#### wholenumber

* Optional parameter to provide rounding for numbers (to an integer value, no decimal place)

| Value         | Description
| ------------- |-----------
| `ceil`        | to round up to the nearest whole number
| `floor`       | to round down to the nearest whole number
| `nil`         | no ceil or floor

#### commafy

* Optional parameter to add commas to large number for readability

| Value         | Description
| ------------- |-------------
| `true`        | Commas will be include, eg: `10,000`
| `false`       | Commas will not be include, eg: `10000`

#### cssClass

* Optional parameter to add one or more css classes to the surrounding div
