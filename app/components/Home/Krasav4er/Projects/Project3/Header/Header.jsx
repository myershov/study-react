import React, { Component } from 'react'
import './Header.styl'

class Header extends Component {
  render () {
    return (
      <div>
        <div className='wrapper'>
          <div className='header-content'>
            <div class="logo">
                <a href="#">
                <div class="logo__img"><img src="img/logo.png" class="logo__img" /></div>
                <div class="logo__text">
                    Интернет-магазин «Благой-арт»
                </div>
                </a>
            </div>
            <div class="search-bar">
                <input type="search" placeholder="Введите название или артикул" class="search" />
                <div class="search-bar__button">
                    <img src="img/search.jpg" />
                </div>
            </div>
            <div class="contacts">
                <div class="contacts__phone">
                    +7 (800) 707-81-39
                </div>
                <div class="contacts__whours">
                    ПН - ПТ с 9:00 до 18:00
                </div>
                <div class="contacts__delivery">
                    Доставка по РФ и СНГ
                </div>
            </div>
            <div class="navbar">
                <div class="list">
                    <div class="main-menu">
                        <ul class="navlist">
                            <li class="navlist__item dropdown-activator d-lev-1">
                                <a href="javascript:void(0)" class="navlist__link">
                                <img src="img/menu-icon.jpg" class="menu-icon" />
                                    КАТАЛОГ ТОВАРОВ
                                <img src="img/menu-icon-drop.jpg" class="menu-icon-drop" />
                                </a>
                                <ul class="dropdown-content d-lev-1 hidden">
                                    <li class="dropdown-activator d-lev-2">
                                       <a href="javascript:void(0)" class="subnavlist">
                                           Cвадебная бижутерия
                                       <img src="img/menu-icon-right.png" class="menu-icon-right" />
                                       </a>
                                    </li>
                                    <li><a href="javascript:void(0)" class="subnavlist">Аксессуары для волос</a></li>
                                    <li><a href="javascript:void(0)" class="subnavlist">Броши</a></li>
                                    <li class="dropdown-activator d-lev-2">
                                        <a href="javascript:void(0)" class="subnavlist__link">
                                            Мужские аксессуары
                                        <img src="img/menu-icon-right.png" class="menu-icon-right" />
                                        </a>
                                        <ul class="dropdown-subcontent d-lev-2 hidden">
                                            <p class="dropdown-subcontent-title">МУЖСКАЯ БИЖУТЕРИЯ</p>
                                            <li><a href="javascript:void(0)" class="subnavlist">Браслеты</a></li>
                                            <li><a href="javascript:void(0)" class="subnavlist">Кулоны</a></li>
                                            <li><a href="javascript:void(0)" class="subnavlist">Зажимы и запонки</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="javascript:void(0)" class="subnavlist">Клатчи</a></li>
                                    <li><a href="javascript:void(0)" class="subnavlist">Детская бижутерия</a></li>
                                    <li><a href="javascript:void(0)" class="subnavlist">Демонстрационное оборудование</a></li>
                                </ul>
                            </li>
                            <li class="navlist__item">
                                <a href="#" class="navlist__link">УСЛОВИЯ РАБОТЫ</a>
                            </li>
                            <li class="navlist__item">
                                <a href="#" class="navlist__link">СКИДКИ</a>
                            </li>
                            <li class="navlist__item">
                                <a href="#" class="navlist__link">ОПЛАТА И ДОСТАВКА</a>
                            </li>
                            <li class="navlist__item">
                                <a href="#" class="navlist__link">ДОКУМЕНТЫ</a>
                            </li>
                            <li class="navlist__item">
                                <a href="#" class="navlist__link">КОНТАКТЫ</a>
                            </li>
                        </ul>
                    </div>
                    <div class="basket">
                       <div class="basket__cart">
                           <img src="img/basket-cart.jpg" class="basket__cart-image" />
                           <img src="img/basket-quantity.jpg" class="basket__cart-image" />
                           <span class="basket__cart-span">товаров / 56 789 Р</span>
                       </div>
                       <div class="basket__login">
                           <img src="img/basket-face.jpg" class="basket__login-image" />
                           <a href="#"><span class="basket__login-span">ВОЙТИ</span></a>
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
