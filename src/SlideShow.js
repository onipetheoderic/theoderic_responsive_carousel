import React, { Component, Children} from 'react'
import PropTypes from 'prop-types'
import CountUp from 'react-countup';

import styles from './styles.css'

export default class SlideShow extends Component {
  state = {
    total: 0,
    current: 0
  }

   static propTypes = {
    text: PropTypes.string,
    imageHeight: PropTypes.number,
    desiredTime: PropTypes.number,//should be in miliseconds
  }
  
  componentDidMount(){
    const {children} = this.props;
    //lets count the children and replace the total in the state
    this.setState({total: Children.count(children) })

    this.interval = setInterval(this.showNext, this.props.desiredTime)
    // the showNext function would be called on every 300 mili
  }

  componentWillUnmount(){
    clearInterval(this.interval)
  }

  showNext = () => {
    const {total, current} = this.state;
    // to reset it to zero if it gets bigger than the amount of total
    this.setState({
      current: current+1 == total? 0 : current+1
    })
  }
/*<div className={styles.bottommiddle}>{bullets}</div>*/
/*<div className={styles.test}>*/
  // Now lets display one single child at a time
  
  render() {
    const {children} = this.props
    const bullets = Array(this.state.total).fill("○")//utf-8 open circle character
    bullets[this.state.current] = "⏺"
// recieves children as props and render them
// react.Children comes with a toArray method to display all the children as arrays
//so we only display the child in the current slide position
    return (
      <div className={styles.container}>
      <div>
        {Children.toArray(children)[this.state.current]}
        <div className={styles.bottommiddle} style={{color:this.props.bulletColor}}>{bullets}</div>
      </div>

     
      </div>
    )
  }
}
