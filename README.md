# theoderic_responsive_carousel

> 

[![NPM](https://img.shields.io/npm/v/theoderic_responsive_carousel.svg)](https://www.npmjs.com/package/theoderic_responsive_carousel) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save theoderic_responsive_carousel
yarn add theoderic_responsive_carousel
```

## Usage

```jsx
import React, { Component } from 'react'

import ExampleComponent from 'theoderic_responsive_carousel'

export default class App extends Component {
  render () {
    return (
      <div>
        <ExampleComponent duration={5000} bulletColor="white">
        <div imageLink="https://placekitten.com/1000/700" alternateText="kitten" imageWidth="100%" imageHeight="400"  textBig="Welcome To my World" textSmall="This is the small text place holder" textBigColor='white' textBigFontSize={50} textSmallSize={20} textSmallColor="white"></div>
        
        <div imageLink="https://placekitten.com/1200/500" alternateText="kitten" imageWidth="100%" imageHeight="400"  textBig="Welcome To my World" textSmall="This is the small text place holder" textBigColor='white' textBigFontSize={50} textSmallSize={20} textSmallColor="white"></div>
        
        <div imageLink="https://placekitten.com/3200/800" alternateText="kitten" imageWidth="100%" imageHeight="400"  textBig="Welcome To my World" textSmall="This is the small text place holder" textBigColor='white' textBigFontSize={50} textSmallSize={20} textSmallColor="white"></div>
        </ExampleComponent>
      </div>
    )
  }
}

```
## PropTypes
	General Properties = {
		duration: PropTypes.number,
		bulletColor: PropTypes.string
	}
	Div Properties = {
	    imageLink: PropTypes.string,
	    textBigFontSize: PropTypes.number,
	    textBigColor: PropTypes.string,
	    textBigBg: PropTypes.number,
	    textBig: PropTypes.string,
	    textSmall: PropTypes.string,
	    textSmallBg: PropTypes.string,
	    imageHeight: PropTypes.string,
	    imageWidth: PropTypes.string,
	    alternateText: PropTypes.string,
	    textSmallSize: PropTypes.number,
	    textSmallColor: PropTypes.string    
	  }

## License

MIT © [onipetheoderic](https://github.com/onipetheoderic)
