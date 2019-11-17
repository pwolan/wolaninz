import React from "react"

const About = () => {
  return (
    <section className="about">
      <h1 className="h1">O nas</h1>
      <div className=" info">
        <div className="info__data  data">
          <p className="data__item">
            Nasza firma <strong>Spółka Zło</strong> od czasów najdawniejszych aż
            do dziś stanowi kolebkę kultury 18 wieku dodatkowo wzbogaconą
            smakiem i aromatem który może gościć na pańskich stołach
          </p>
        </div>
        <div className="info__data data">
          <div className="data__item">ul. Biała Droga 13</div>
          <div className="data__item">34-123 Chocznia</div>
          <div className="data__item">Najlepsze na dzikim zachodzie</div>
          <div className="data__item">tel. 696969690</div>
          <div className="data__item">Spółka zło Dundersztyca</div>
        </div>
      </div>
    </section>
  )
}

export default About
