import React, { Component } from 'react'

import './Header.styl'

class Header extends Component {
  render () {
    return (
      <div>
        <div className='wrapper'>
          <div className='header-content'>
            <div className='logo'>
              <a href=''>
                <div className='logo__img'>
                  <img src={require('../images/logo.png')} alt='logo__img' />
                </div>
                <div className='logo__text'>
                    Интернет-магазин «Благой-арт»
                </div>
              </a>
            </div>
            <div className='search-bar'>
              <input type='text' placeholder='Введите название или артикул' className='search' />
              <div className='search-bar__button'>
                <img src={require('../images/search.png')} />
              </div>
            </div>
            <div className='contacts'>
              <div className='contacts__phone'>
                  +7 (800) 707-81-39
              </div>
              <div className='contacts__whours'>
                  ПН - ПТ с 9:00 до 18:00
              </div>
              <div className='contacts__delivery'>
                  Доставка по РФ и СНГ
              </div>
            </div>
            <div className='navbar'>
              <div className='list'>
                <div className='main-menu'>
                  <ul className='navlist'>
                    <li className='navlist__item dropdown-activator d-lev-1'>
                      <a href='javascript:void(0)' className='navlist__link'>
                        <img src={require('../images/circle.png')} className='menu-icon' />
                          КАТАЛОГ ТОВАРОВ
                        <img src='img/menu-icon-drop.jpg' className='menu-icon-drop' />
                      </a>
                      <ul className='dropdown-content d-lev-1 hidden'>
                        <li className='dropdown-activator d-lev-2'>
                          <a href='javascript:void(0)' className='subnavlist'>
                           Cвадебная бижутерия
                           <img src='img/menu-icon-right.png' className='menu-icon-right' />
                          </a>
                        </li>
                        <li><a href='javascript:void(0)' className='subnavlist'>Аксессуары для волос</a></li>
                        <li><a href='javascript:void(0)' className='subnavlist'>Броши</a></li>
                        <li className='dropdown-activator d-lev-2'>
                          <a href='javascript:void(0)' className='subnavlist__link'>
                            Мужские аксессуары
                            <img src='img/menu-icon-right.png' className='menu-icon-right' />
                          </a>
                          <ul className='dropdown-subcontent d-lev-2 hidden'>
                            <p className='dropdown-subcontent-title'>МУЖСКАЯ БИЖУТЕРИЯ</p>
                            <li><a href='javascript:void(0)' className='subnavlist'>Браслеты</a></li>
                            <li><a href='javascript:void(0)' className='subnavlist'>Кулоны</a></li>
                            <li><a href='javascript:void(0)' className='subnavlist'>Зажимы и запонки</a></li>
                          </ul>
                        </li>
                        <li><a href='javascript:void(0)' className='subnavlist'>Клатчи</a></li>
                        <li><a href='javascript:void(0)' className='subnavlist'>Детская бижутерия</a></li>
                        <li><a href='javascript:void(0)' className='subnavlist'>Демонстрационное оборудование</a></li>
                      </ul>
                    </li>
                    <li className='navlist__item'>
                      <a href='#' className='navlist__link'>УСЛОВИЯ РАБОТЫ</a>
                    </li>
                    <li className='navlist__item'>
                      <a href='#' className='navlist__link'>СКИДКИ</a>
                    </li>
                    <li className='navlist__item'>
                      <a href='#' className='navlist__link'>ОПЛАТА И ДОСТАВКА</a>
                    </li>
                    <li className='navlist__item'>
                      <a href='#' className='navlist__link'>ДОКУМЕНТЫ</a>
                    </li>
                    <li className='navlist__item'>
                      <a href='#' className='navlist__link'>КОНТАКТЫ</a>
                    </li>
                  </ul>
                </div>
                <div className='basket'>
                  <div className='basket__cart'>
                    <img src='img/basket-cart.jpg' className='basket__cart-image' />
                    <img src='img/basket-quantity.jpg' className='basket__cart-image' />
                    <span className='basket__cart-span'>товаров / 56 789 Р</span>
                  </div>
                  <div className='basket__login'>
                    <img src='img/basket-face.jpg' className='basket__login-image' />
                    <a href='#'><span className='basket__login-span'>ВОЙТИ</span></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Header
