import React, { Component } from 'react';
import { getCityList } from './net'

export default class extends Component {
  constructor(props) {
    super(props)

    this.state = {
      cityList: []
    }
  }

  componentWillMount() {
    getCityList().then((data) => {
      this.setState({cityList: data.data})
    })
  }

  render() {
    const { cityList } = this.state
    const listItem = cityList.map((item, index) => 
      <li key={index}>
        <span>{item.area}</span>
        <span>{item.birthday}</span>
      </li>
    )
    return (
      <div className="god-wrap">
        <ul>{listItem}</ul>
      </div>
    )
  }
}