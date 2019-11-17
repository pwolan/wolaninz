import React from "react"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="big-footer">
        <h3 className="big-footer__header big-footer__header--data">
          Dane kontaktowe
        </h3>
        <h3 className="big-footer__header big-footer__header--map">
          Znajdziesz nas
        </h3>
        <div className="big-footer__data data ">
          <div className="data__item">ul. Biała Droga 13</div>
          <div className="data__item">34-123 Chocznia</div>
          <div className="data__item">Najlepsze na dzikim zachodzie</div>
          <div className="data__item">tel. 696969690</div>
          <div className="data__item">Spółka zło Dundersztyca</div>
        </div>
        <div className="big-footer__map map">
          <iframe
            title="map"
            className="map__iframe"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d41143.79421309106!2d19.410865971081076!3d49.870877826152345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471685f231cd92bd%3A0x89622101bad325d!2sChocznia!5e0!3m2!1spl!2spl!4v1573911904123!5m2!1spl!2spl"
          ></iframe>
        </div>
      </div>

      <div className="small-footer">
        Made &lt;/&gt; by ccccstudio &copy; Powered with Gatsby
      </div>
    </footer>
  )
}

export default Footer
