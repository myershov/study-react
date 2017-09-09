import React, { Component } from 'react'
import './Slider.styl'

class Slider extends Component {
  render () {
    return (
      <div>
        <div className="slider">
          <button id="left">left</button>
          <div className="window">
            <div className="train" id="train">
              <div className="block y">1</div>
              <div className="block g">2</div>
              <div className="block r">3</div>
              <div className="block o">4</div>
              <div className="block b">5</div>
            </div>
          </div>
          <button id="right">right</button>
        </div>
        <div className="textmain">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium. Praesent urna<br />
          urna, venenatis at ultrices ac, viverra in turpis. Duis sceler isque mauri sut metus.
        </div>
      </div>
    )
  }
}
export default Slider
