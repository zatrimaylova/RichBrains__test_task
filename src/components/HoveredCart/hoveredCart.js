import React from 'react';

import icon_white_plus from '../img/icon_white_plus.png';

import './hoveredCart.scss';

class HoveredCart extends React.Component {
  render() {  
    return(
      <div className="cart cart_hovered">
        <div className="title-holder">
          <h3>MSc Data Analytics and Information Systems Management</h3>
          <img src={icon_white_plus} alt="X"/>
        </div>
        <div className="cart__duration dates">
          <h4 className="dates-title">Duration:</h4>
          <p className="dates-info">Minimum: 18 months <br /> Maximum: 36 months</p>
        </div>
        <div className="cart__dates dates">
          <h4 className="dates-title">Start Dates:</h4>
          <p className="dates-info">January, April, July, October</p>
        </div>
        <h1>£8,500</h1>
        <button>MORE INFO</button>
      </div>
    )
  }
}

export default HoveredCart;