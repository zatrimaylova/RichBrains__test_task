import React from 'react';

import item from '../img/item.png';
import active from '../img/active.png';

import './menu.scss';

class Menu extends React.Component {
  render() {
    return (
      <>
        <div className="menu-hidden">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" viewBox="0 0 20 16" fill="none">
            <path d="M4.27734 8.13889V12.5C4.27734 14.1 6.77734 15.5 9.77734 15.5C12.7773 15.5 15.2773 14.2 15.2773 12.5V8.13889M17.2773 6.91667V11C17.2773 11.8 17.9773 12.5 18.7773 12.5M18.7773 6L9.77734 11.5L0.777344 6L9.77734 0.5L18.7773 6Z" stroke="#259609" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <h2>Choose YOUR Career</h2>
          <img src={item} />
        </div>
        <div className="menu">
          <div className="menu__title-container">
            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
              <g clip-path="url(#clip0)">
              <path d="M5.27734 10.1389V14.5C5.27734 16.1 7.77734 17.5 10.7773 17.5C13.7773 17.5 16.2773 16.2 16.2773 14.5V10.1389M18.2773 8.91667V13C18.2773 13.8 18.9773 14.5 19.7773 14.5M19.7773 8L10.7773 13.5L1.77734 8L10.7773 2.5L19.7773 8Z" stroke="#259609" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              </g>
              <defs>
              <clipPath id="clip0">
              <rect width="20" height="20" fill="white" transform="translate(0.777344)"/>
              </clipPath>
              </defs>
            </svg>
            <h2>Careers</h2>
          </div>
          <div className="menu__content">
            <ul className="menu__list">
              <li className="list__item">
                <h3>Business & Management</h3>
                <img src={item} alt="icon" />
              </li>
              <li className="list__item">
                <h3>Computing & IT</h3>
                <img src={item} alt="icon" />
              </li>
              <li className="list__item">
                <h3>Fashion & Media</h3>
                <img src={item} alt="icon" />
              </li>
              <li className="list__item">
                <h3>Finance & Accounting</h3>
                <img src={item} alt="icon" />
              </li>
              <li className="list__item">
                <h3>Law & Criminology</h3>
                <img src={item} alt="icon" />
              </li>
              <li className="list__item">
                <h3>Marketing & Communications</h3>
                <img src={item} alt="icon" />
              </li>
              <li className="list__item active-item">
                <h3>Business & Management</h3> 
                <img src={active} alt="icon" />
              </li>
              <ul className="menu__hidden-attributes">
                <li>Market Research Executive</li>
                <li>Child Psychologist</li>
                <li>Guidance Counsellor</li>
                <li className="hidden-attributes__active">Behaviour Analyst</li>
                <li>Recreational Therapist</li>
              </ul>
            </ul>
          </div>
          <button className="menu__show-all">Show all programmes</button>
        </div>
      </>
    )
  }
}

export default Menu;