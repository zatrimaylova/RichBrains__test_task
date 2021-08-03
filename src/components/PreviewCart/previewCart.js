import React from 'react';

import icon_green_plus from '../img/icon_green_plus.png';

import './previewCart.scss';

class PreviewCart extends React.Component {
  render() {
    const { length, img } = this.props;
    return(
      <div className="cart cart_preview">
          <div className="cart__brand-image">
            <img className="close-image" src={icon_green_plus} alt="brand image" />
            <img className="brand-image" src={img} alt="brand image" />
          </div>
          <div className="cart__titles">
            <span>BUSINESS & MANAGEMENT</span>
            <h2 className="cart__title">Master of Business Administration (CMI)</h2>
          </div>
          <div className="cart__details">
            <div className="cart__details_item">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                <path d="M4.5 10.219V14.5801C4.5 16.1801 7 17.5801 10 17.5801C13 17.5801 15.5 16.2801 15.5 14.5801V10.219M17.5 8.99674V13.0801C17.5 13.8801 18.2 14.5801 19 14.5801M19 8.08008L10 13.5801L1 8.08008L10 2.58008L19 8.08008Z" stroke="#3E3E3E" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <p>Postgraduate</p>
            </div>
            <div className="cart__details_item">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                <path d="M15.5 4.87891H17.5V17.8789H2.5V4.87891H4.5M12.5 4.87891H7.5M2.5 8.87891H17.5M15.5 2.87891H12.5V6.87891H15.5V2.87891ZM7.5 2.87891H4.5V6.87891H7.5V2.87891Z" stroke="#3E3E3E" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <p className="details__length">{length}</p>
            </div>
          </div>
          <span className="cart-cost">£12,650</span>
          <button className="cart__button">MORE INFO</button>
      </div>
    )
  }
}

export default PreviewCart;