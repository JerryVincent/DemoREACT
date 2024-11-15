import React, { Component } from 'react'

export default class Random extends Component {
  constructor(props){
    super(props)
    console.log(props.user);
    this.state={cname:"BMW"}
  }
  change(data){
    this.setState({cname:data})
  }
  render() {
    return (
      <><div>Random</div>
      <p>The user is: {this.props.user}</p>
      <p>The car is: {this.state.cname}</p>
      <button className='btn btn-danger' onClick={()=>this.change('Porsche')}>Click</button>
      </>
    )
  }
}
// rcc for loading basic class structure