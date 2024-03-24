import React from "react";
import landingfoto from "./assets/restauranfood.jpg"
import fotobox1 from "./assets/greek salad.jpg"
import fotobox2 from "./assets/bruchetta.svg"
import fotobox3 from "./assets/lemon dessert.jpg"
import restaurantfoto from "./assets/restaurant.jpg"
import cheffoto from "./assets/restaurant chef B.jpg"

const Main = () => {
    return (
        <div>
            <main>
                <section class="landing">

                    <h1>Little lemon</h1>
                    <h3>chicago</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <img class="landing" src={landingfoto} />
                    <button>resever a table</button>

                </section>
                <section class="special">
                    <h2>This week is special</h2>
                    <button>order Online</button>
                    <div class="offer">
                        <div class="box">
                            <img src={fotobox1}></img>
                            <h4>name of dish <span>price</span></h4>
                            <p>Lorem</p>
                            <a href="#">order a delivery</a>
                        </div>
                        <div class="box">
                            <img src={fotobox2}></img>
                            <h4>name of dish <span>price</span></h4>
                            <p>Lorem</p>
                            <a href="#">order a delivery</a>
                        </div>
                        <div class="box">
                            <img src={fotobox3}></img>
                            <h4>name of dish <span>price</span></h4>
                            <p>Lorem</p>
                            <a href="#">order a delivery</a>
                        </div>
                    </div>
                </section>
                <section class="testimonials">
                    <div class="box">
                        <img ></img>
                        <h4>name of person</h4>
                        <p>name</p>
                        <p>Lorem</p>
                    </div>
                    <div class="box">
                        <img ></img>
                        <h4>name of person</h4>
                        <p>name</p>
                        <p>Lorem</p>
                    </div>
                    <div class="box">
                        <img ></img>
                        <h4>name of person</h4>
                        <p>name</p>
                        <p>Lorem</p>
                    </div>
                    <div class="box">
                        <img ></img>
                        <h4>name of person</h4>
                        <p>name</p>
                        <p>Lorem</p>
                    </div>
                </section>
                <section class="description">
                    <div class="image">
                        <img src={restaurantfoto}></img>
                        <img src={cheffoto}></img>
                    </div>
                    <div class="info">

                        <h1>Little lemon</h1>
                        <h3>chicago</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </section>
            </main>
        </div>
    )
}
export default Main;