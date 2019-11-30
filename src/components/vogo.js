import React, { Component } from "react";

export default class Vogo extends Component {
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <figure>
          <img
            className="bike"
            style={{ width: "50%" }}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH1OMuHgl6ZJ0Epvgdo1P5nZgBPpGPblPwelICkZIgu1UZIHja&s"
          />
          <figcaption>Vogo</figcaption>
        </figure>

        <figure>
          <img
            className="bike"
            src="https://www.thenewsminute.com/sites/default/files/styles/news_detail/public/Bounce_facebook.jpg?itok=-6Y7IK7j"
          />
          <figcaption>Bounce</figcaption>
        </figure>
      </div>
    );
  }
}
