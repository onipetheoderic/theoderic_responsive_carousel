import React, { Component } from 'react'

import ExampleComponent from 'theoderic_responsive_carousel'

export default class App extends Component {
  render () {
    return (
      <div>
        <ExampleComponent duration={20000} bulletColor="blue">
        <div imageLink="https://placekitten.com/1000/700" alternateText="kitten" imageWidth="100%" imageHeight="400"  textBig="Welcome To my World" textSmall="This is the small text place holder" textBigColor='white' textBigFontSize={50} textSmallSize={20} textSmallColor="white"></div>
        <div imageLink="https://placekitten.com/1200/500" alternateText="kitten" imageWidth="100%" imageHeight="400"  textBig="Welcome To my World" textSmall="This is the small text place holder" textBigColor='white' textBigFontSize={50} textSmallSize={20} textSmallColor="white"></div>
        <div imageLink="https://placekitten.com/3200/800" alternateText="kitten" imageWidth="100%" imageHeight="400"  textBig="Welcome To my World" textSmall="This is the small text place holder" textBigColor='white' textBigFontSize={50} textSmallSize={20} textSmallColor="white"></div>
        </ExampleComponent>
      </div>
    )
  }
}
