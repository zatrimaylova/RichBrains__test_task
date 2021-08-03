import React from 'react';
import ClickedCart from '../ClickedCart/clickedCart.js';
import PreviewCart from '../PreviewCart/previewCart.js';
import HoveredCart from '../HoveredCart/hoveredCart.js';

import barcoIcon from '../img/barcoIcon.png';
import buffelsIcon from '../img/buffelsIcon.png';
import daniscoIcon from '../img/daniscoIcon.png';
import embraturIcon from '../img/embraturIcon.png';

import './cartsContainer.scss';

class CartContainer extends React.Component {
  render() {
    return(
      <div className="carts_container">
        <PreviewCart length="Every 12 weeks" img={embraturIcon} />
        <HoveredCart />
        <PreviewCart length="Every 12 weeks" img={daniscoIcon} />
        <ClickedCart />
        <PreviewCart length="Every 12 weeks" img={buffelsIcon} />
        <PreviewCart length="January, April, July, October, November" img={barcoIcon} />
      </div>
    )
  }
}

export default CartContainer;