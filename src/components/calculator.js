import React from 'react';
import calculate from '../logic/Calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleClickEvent = this.handleClickEvent.bind(this);
  }

  handleClickEvent(event) {
    this.setState((state) => calculate(state, event.target.innerText));
  }

  render() {
    const { next, total } = this.state;
    return (
      <>
        <section className="container">
          <div className="calc-box">
            <div className="screen">
              <span className="output">{next || total || 0}</span>
            </div>
            <div className="buttons">
              <button
                type="button"
                className="calc"
                onClick={this.handleClickEvent}
              >
                AC
              </button>
              <button
                type="button"
                className="calc"
                onClick={this.handleClickEvent}
              >
                +/-
              </button>
              <button
                type="button"
                className="calc"
                onClick={this.handleClickEvent}
              >
                {' '}
                %
              </button>
              <button
                type="button"
                className="calc active"
                onClick={this.handleClickEvent}
              >
                <span>&#247;</span>
              </button>
              <button
                type="button"
                className="calc"
                onClick={this.handleClickEvent}
              >
                7
              </button>
              <button
                type="button"
                className="calc"
                onClick={this.handleClickEvent}
              >
                8
              </button>
              <button
                type="button"
                className="calc"
                onClick={this.handleClickEvent}
              >
                9
              </button>
              <button
                type="button"
                className="calc active"
                onClick={this.handleClickEvent}
              >
                x
              </button>
              <button
                type="button"
                className="calc"
                onClick={this.handleClickEvent}
              >
                4
              </button>
              <button
                type="button"
                className="calc"
                onClick={this.handleClickEvent}
              >
                5
              </button>
              <button
                type="button"
                className="calc"
                onClick={this.handleClickEvent}
              >
                6
              </button>
              <button
                type="button"
                className="calc active"
                onClick={this.handleClickEvent}
              >
                -
              </button>
              <button
                type="button"
                className="calc"
                onClick={this.handleClickEvent}
              >
                1
              </button>
              <button
                type="button"
                className="calc"
                onClick={this.handleClickEvent}
              >
                2
              </button>
              <button
                type="button"
                className="calc"
                onClick={this.handleClickEvent}
              >
                3
              </button>
              <button
                type="button"
                className="calc active"
                onClick={this.handleClickEvent}
              >
                +
              </button>
              <button
                type="button"
                className="zero"
                onClick={this.handleClickEvent}
              >
                0
              </button>
              <button
                type="button"
                className="calc"
                onClick={this.handleClickEvent}
              >
                .
              </button>
              <button
                type="button"
                className="calc active"
                onClick={this.handleClickEvent}
              >
                =
              </button>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Calculator;
