import React from 'react';
import ReactDOM from 'react-dom';
import { getApp } from '../../app'

const Home = (props) => {
  return (
    <h1>商品</h1>
  )
}

ReactDOM.render(getApp(<Home key='2' />), document.getElementById('root'));