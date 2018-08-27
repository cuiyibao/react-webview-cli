import React from 'react';
import ReactDOM from 'react-dom';
import { List } from 'antd-mobile';
import { getApp } from './app';
import registerServiceWorker from './registerServiceWorker';

import { menuConfig as navList} from './config/menu-config'

const Item = List.Item;
const Nav = (props) => {
  return (
    <List className="nav-list">
      {navList.map((item, index) => 
        <Item key={index}><a href={item.url}>{item.title}</a></Item>
      )}
    </List>
  )
}

ReactDOM.render(getApp(<Nav />), document.getElementById('root'));
registerServiceWorker();