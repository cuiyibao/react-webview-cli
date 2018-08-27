import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { getApp } from '../../app'
import City from './city'

ReactDOM.render(getApp(<City />), document.getElementById('root'));