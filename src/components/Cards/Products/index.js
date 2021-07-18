import React from "react";
import "./style.css";
export default () => {
  return (
    <div className="container-card-products">
      <p>Acompanhe nossas ofertas</p>
      <div className="itens-cards">
        <div className="card-container">
          <div className="card-face face-1">
            <div className="top-part ">
              <p className="hide">Nike revolution</p>
              <div className="shoe-info">
                <span className="shoe-new hide">New</span>
                <span className="shoe-year hide">2021</span>
              </div>
            </div>
            <div className="bottom-part">
              <h2 className="shoe-price hide">
                <div className="shoe-through">
                  <span>$</span>130.00
                </div>
                <div>
                  <span>$</span>100.00
                </div>
              </h2>
              <div className="right-arrow hide">
                <img src="right-arrow.png" alt="right arrow" />
              </div>
            </div>
          </div>

          <div className="card-face face-2">
            <div className="top-part">
              <div className="header">
                <h3 className="heading hide">Epic shoes</h3>
              </div>
              <ul className="features hide">
                <li>Smooth & Fast.</li>
                <li>Lightweight & Breathable.</li>
                <li>Best For Running.</li>
              </ul>
              <div className="color-wrap hide">
                <span>Color : </span>
                <div className="colors">
                  <span className="color blue active"></span>
                  <span className="color black"></span>
                  <span className="color white"></span>
                </div>
              </div>
            </div>
            <div className="buy-wrap">
              <a href="#" className="buy hide">
                Add
              </a>
            </div>
          </div>

          <div className="show-image-wrapper">
            <div className="shoe-img">
              <img src="nike-orange-removebg.png" alt="" className="shoe" />
            </div>
          </div>
        </div>

        <div className="card-container">
          <div className="card-face face-1">
            <div className="top-part ">
              <p className="hide">Nike revolution</p>
              <div className="shoe-info">
                <span className="shoe-new hide">New</span>
                <span className="shoe-year hide">2021</span>
              </div>
            </div>
            <div className="bottom-part">
              <h2 className="shoe-price hide">
                <div className="shoe-through">
                  <span>$</span>130.00
                </div>
                <div>
                  <span>$</span>100.00
                </div>
              </h2>
              <div className="right-arrow hide">
                <img src="right-arrow.png" alt="right arrow" />
              </div>
            </div>
          </div>

          <div className="card-face face-2">
            <div className="top-part">
              <div className="header">
                <h3 className="heading hide">Epic shoes</h3>
              </div>
              <ul className="features hide">
                <li>Smooth & Fast.</li>
                <li>Lightweight & Breathable.</li>
                <li>Best For Running.</li>
              </ul>
              <div className="color-wrap hide">
                <span>Color : </span>
                <div className="colors">
                  <span className="color blue active"></span>
                  <span className="color black"></span>
                  <span className="color white"></span>
                </div>
              </div>
            </div>
            <div className="buy-wrap">
              <a href="#" className="buy hide">
                Add
              </a>
            </div>
          </div>

          <div className="show-image-wrapper">
            <div className="shoe-img">
              <img src="nike-orange-removebg.png" alt="" className="shoe" />
            </div>
          </div>
        </div>
        <div className="card-container">
          <div className="card-face face-1">
            <div className="top-part ">
              <p className="hide">Nike revolution</p>
              <div className="shoe-info">
                <span className="shoe-new hide">New</span>
                <span className="shoe-year hide">2021</span>
              </div>
            </div>
            <div className="bottom-part">
              <h2 className="shoe-price hide">
                <div className="shoe-through">
                  <span>$</span>130.00
                </div>
                <div>
                  <span>$</span>100.00
                </div>
              </h2>
              <div className="right-arrow hide">
                <img src="right-arrow.png" alt="right arrow" />
              </div>
            </div>
          </div>

          <div className="card-face face-2">
            <div className="top-part">
              <div className="header">
                <h3 className="heading hide">Epic shoes</h3>
              </div>
              <ul className="features hide">
                <li>Smooth & Fast.</li>
                <li>Lightweight & Breathable.</li>
                <li>Best For Running.</li>
              </ul>
              <div className="color-wrap hide">
                <span>Color : </span>
                <div className="colors">
                  <span className="color blue active"></span>
                  <span className="color black"></span>
                  <span className="color white"></span>
                </div>
              </div>
            </div>
            <div className="buy-wrap">
              <a href="#" className="buy hide">
                Add
              </a>
            </div>
          </div>

          <div className="show-image-wrapper">
            <div className="shoe-img">
              <img src="nike-orange-removebg.png" alt="" className="shoe" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
