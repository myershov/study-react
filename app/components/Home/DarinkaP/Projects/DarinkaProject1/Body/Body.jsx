import React, { Component } from 'react'
import './Body.styl'

class Body extends Component {
  render () {
    return (
	<div class="wrap">
    <div class="banner">
        <div class="banner-inner">
            <div class="slider">
                <div class="slider-menu">
                    <div class="slider-menu-item">
                        <img src="../img/banner-menu-item-1.png" alt="Desktop" />
                    </div>
                    <div class="slider-menu-item">
                        <img src="../img/banner-menu-item-2.png" alt="Tablet" />
                    </div>

                    <div class="slider-menu-item">
                        <img src="../img/banner-menu-item-3.png" alt="Phone" />
                    </div>

                </div>
                <div class="slider-items">
                    <img src="../img/banner-content.png" alt="Phone" />
                </div>
            </div>
        </div>
    </div>


    <div class="about">
        <div class="about-inner">
            <h3 class="title">About minimal</h3>
            <h4 class="sub-title">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged</h4>
            <div class="img"><img src="../img/about-img.png" alt="App" /></div>
        </div>
    </div>

    <div class="sec3">
            <div class="sec3-inner">
                <div class="slider">
                    <ul class="slider-menu">
                        <li class="slider-menu-icon"><img src="../img/sec3-icon-1.png" alt="" /></li>
                        <li class="slider-menu-icon"><img src="../img/sec3-icon-2.png" alt="" /></li>
                        <li class="slider-menu-icon"><img src="../img/sec3-icon-3.png" alt="" /></li>
                        <li class="slider-menu-icon"><img src="../img/sec3-icon-4.png" alt="" /></li>
                        <li class="slider-menu-icon"><img src="../img/sec3-icon-5.png" alt="" /></li>
                        <li class="slider-menu-icon"><img src="../img/sec3-icon-6.png" alt="" /></li>
                    </ul>
                    <div class="slider-items">
                        <img src="../img/sec3-item-content.png" alt="Desktop" />
                    </div>
                </div>
            </div>
    </div>
        
    <div class="sec4">
        <div class="sec4-inner">
            <div class="text"><img src="../img/sec4-text.png" alt=""></div>
            <div class="img"><img src="../img/sec4-right-img.jpg" alt=""></div>
        </div>
    </div>
    </div>
    )
  }
}
export default Body
