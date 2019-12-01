import React from "react"
import Navbar from "../layout/Navbar"
import SecondaryHeader from "../layout/SecondaryHeader"
import Footer from "../layout/Footer"
const Contact = () => {
  return (
    <React.Fragment>
      <Navbar />
      <SecondaryHeader title="Kontakt" />
      <div className="container">
        <section>
          <h1 className="h1">Skontaktuj się z nami!</h1>
          <div className="people">
            <div className="people__person data">
              <div className="data-item name">Jacek Soplica</div>
              <div className="data-item">Soplicowo, ul. Powstańców 12</div>
              <div className="data-item">tel. 72758596</div>
              <div className="data-item">jacek.soplica@soplicowo.com</div>
            </div>
            <div className="people__person data">
              <div className="data-item name">Ksiądz Robak</div>
              <div className="data-item">
                Klasztor w Soplicowie, ul. Nowogródzka 3
              </div>
              <div className="data-item">tel. 357209632</div>
              <div className="data-item">xrobak@bernardyni.com</div>
            </div>
          </div>
          <form action="" className="contactForm">
            <label className="contactForm__label">
              <input
                type="text"
                className="contactForm__input"
                placeholder="Nazwisko i Imię"
              />
            </label>
            <label className="contactForm__label">
              <input
                type="email"
                className="contactForm__input"
                placeholder="Adres email"
              />
            </label>
            <label className="contactForm__label">
              <input
                type="email"
                className="contactForm__input"
                placeholder="Numer telefonu"
              />
            </label>
            <label className="contactForm__label">
              <input
                type="text"
                className="contactForm__input"
                placeholder="Temat"
              />
            </label>
            <label htmlFor="mailBody" className="contactForm__label"></label>
            <textarea
              id="mailBody"
              className="contactForm__textArea"
              placeholder="Treść emaila"
            ></textarea>
            <button className="contactForm__submit">Wyślij wiadomość</button>
          </form>
        </section>
      </div>
      <Footer />
    </React.Fragment>
  )
}

export default Contact
