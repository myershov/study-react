import React, { Component } from 'react'
import './Body.styl'

class Body extends Component {
  constructor () {
    super()
    this.state = {
      isResExist: false,
      x1: null,
      x2: null,
      a: null,
      b: null,
      c: null
    }
    this.handleResult = this.handleResult.bind(this)
    this.handleA = this.handleA.bind(this)
    this.handleB = this.handleB.bind(this)
    this.handleC = this.handleC.bind(this)
  }
  handleA (e) {
    this.setState({a: e.target.value})
  }
  handleB (e) {
    this.setState({b: e.target.value})
  }
  handleC (e) {
    this.setState({c: e.target.value})
  }
  handleResult () {
    const { a, b, c } = this.state
    const { x1, x2 } = this.calculate(a, b, c)
    this.setState({ x1, x2, isResExist: true })
  }
  calculate (a, b, c) {
    const d = b * b - 4 * a * c
    if (d === 0) {
      return { x1: -b / (2 * a), x2: '' }
    } else if (d > 0) {
      const x1 = Math.round((-b + Math.sqrt(d)) / (2 * a) * 100) / 100
      const x2 = Math.round((-b - Math.sqrt(d)) / (2 * a) * 100) / 100
      return { x1, x2 }
    } else {
      return { x1: 'no roots', x2: 'no roots' }
    }
  }
  render () {
    return (
      <div className='block-body'>
        <div className='block-body-title'>
          <p>Знаходження коренів квадратного рівняння</p>
        </div>
        <div className='block-body-instructions'>
          <p>Квадратне рівняння відноситься до алгебраїчних рівнянь загального вигляду другого порядку , де Х є вільною змінної, a, b, c це коефіцієнти, де a не дорівнює 0.
          Воно може мати від одного до двох коренів з речовими коефіцієнтами, залежить від значення дискримінанта. Корні можуть бути комплексними і речовими.
          Основні кілька етапів вирішення:
          1. Дискримінант обчислюється за такою формулою:
          2. Корні квадратного рівняння в онлайн калькуляторі знаходяться за наступною формулою:
          Введіть негативний коефіцієнт, якщо Вам потрібно поставити мінус...</p>
        </div>
        <div className='block-body-logical'>
          <p>Please, input parameters</p>
          <input type='number' placeholder='A' onClick={this.handleA} />
          <h2>x<sup>2</sup> +</h2>
          <input type='number' placeholder='B' onClick={this.handleB} />
          <h2>x +</h2>
          <input type='number' placeholder='C' onClick={this.handleC} />
          <button type='button' onClick={this.handleResult}>get result</button>
          <div className='block-body-result'>
            {this.state.isResExist && (
              <p>
                Results: <h2>{`x1 = ${this.state.x1}`}</h2>
                <h2>{`x2 = ${this.state.x2}`}</h2>
              </p>
            )}
          </div>
        </div>
        <div className='block-body-calc'>
          My simple calculator
        </div>
      </div>
    )
  }
}
export default Body
