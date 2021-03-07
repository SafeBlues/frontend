import React from 'react'
class yourComponent extends React.Component {
  constructor () {
     // default state
     super()
     this.state = {
        someValue: 'hello'
     }
  }
  render () {
      if (this.state.someValue){
          return (
            <div>{this.state.someValue}</div>
          )
        } else {
            return "nothing passed in"
        }
  }
}
export default yourComponent