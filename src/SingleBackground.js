import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CountUp from 'react-countup';

import styles from './styles.css'


export default class SingleBackground extends Component {
  static propTypes = {
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

  render() {
    const imageHeight = this.props.imageHeight
    return (
      <div className={styles.container}>
     <img className={styles.responsive_image} src={this.props.imageLink} alt={this.props.alternateText} width="100%" height={this.props.imageHeight}/>
        <div style={{fontWeight:'600', color:this.props.textBigColor, fontSize:this.props.textBigFontSize}} className={styles.centered}>{this.props.textBig}</div>

        <div className={styles.centeredSmall} style={{color:this.props.textSmallColor, fontSize: this.props.textSmallSize}}>{this.props.textSmall}</div>

        
      </div>
    )
  }
}
