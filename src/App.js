import React from 'react';

import CartContainer from './components/CartsContainer/cartsContainer.js';
import Menu from './components/Menu/menu.js';

import icon_refresh from './components/img/icon_refresh.png';

import './App.scss'; 

export function App() {
  return (
    <div className="container">
      <h1 className="main_title">Find Your Course</h1>
      <div className="content">
        <Menu />
        <CartContainer />
      </div>
      <div className="button_holder">
        <button className="button__more">
          More programmes
          <img src={icon_refresh} alt="refresh" />
        </button>
      </div>
    </div>
  );
};