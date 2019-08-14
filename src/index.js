import React, { Component, Children } from 'react'
import PropTypes from 'prop-types'

import styles from './styles.css'
import SlideShow from './SlideShow';
import SingleBackground from './SingleBackground';

export default class ExampleComponent extends Component {
  static propTypes = {
    text: PropTypes.string
  }

  render() {

    const lists = Children.map(this.props.children, child => (  

      <SingleBackground textSmallSize={child.props.textSmallSize} textSmallColor={child.props.textSmallColor} 
      textBigFontSize={child.props.textBigFontSize} textBigColor={child.props.textBigColor} 
      textSmall={child.props.textSmall} textBig={child.props.textBig} imageHeight={child.props.imageHeight} imageWidth={child.props.imageWidth} alternateText={child.props.alternateText} imageLink={child.props.imageLink}>{child}</SingleBackground>
    ));

    return (
     <div>
        <SlideShow desiredTime={this.props.duration} bulletColor={this.props.bulletColor}>          
        {lists}
        </SlideShow>
      </div>
    )
  }
}
