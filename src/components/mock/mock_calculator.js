import React from 'react';
// eslint-disable-next-line react/prefer-stateless-function

const handleClickEvent = jest.fn(() => 3);

const Calculator = () => (
  <>
    <section className="container">
      <h1 className="calc-title">Let&apos;s do some mathematics!</h1>
      <div className="calc-box">
        <div className="screen">
          <span className="output">0</span>
        </div>
        <div className="buttons">
          <button type="button" className="calc" onClick={handleClickEvent}>
            AC
          </button>
          <button type="button" className="calc" onClick={handleClickEvent}>
            +/-
          </button>
          <button type="button" className="calc" onClick={handleClickEvent}>
            {' '}
            %
          </button>
          <button
            type="button"
            className="calc active"
            onClick={handleClickEvent}
          >
            <span>&#247;</span>
          </button>
          <button type="button" className="calc" onClick={handleClickEvent}>
            7
          </button>
          <button type="button" className="calc" onClick={handleClickEvent}>
            8
          </button>
          <button type="button" className="calc" onClick={handleClickEvent}>
            9
          </button>
          <button
            type="button"
            className="calc active"
            onClick={handleClickEvent}
          >
            x
          </button>
          <button type="button" className="calc" onClick={handleClickEvent}>
            4
          </button>
          <button type="button" className="calc" onClick={handleClickEvent}>
            5
          </button>
          <button type="button" className="calc" onClick={handleClickEvent}>
            6
          </button>
          <button
            type="button"
            className="calc active"
            onClick={handleClickEvent}
          >
            -
          </button>
          <button type="button" className="calc" onClick={handleClickEvent}>
            1
          </button>
          <button type="button" className="calc" onClick={handleClickEvent}>
            2
          </button>
          <button type="button" className="calc" onClick={handleClickEvent}>
            3
          </button>
          <button
            type="button"
            className="calc active"
            onClick={handleClickEvent}
          >
            +
          </button>
          <button type="button" className="zero" onClick={handleClickEvent}>
            0
          </button>
          <button type="button" className="calc" onClick={handleClickEvent}>
            .
          </button>
          <button
            type="button"
            className="calc active"
            onClick={handleClickEvent}
          >
            =
          </button>
        </div>
      </div>
    </section>
  </>
);
export { Calculator, handleClickEvent };
