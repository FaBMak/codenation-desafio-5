import React from "react";

import Contact from "./Contact";

class Contacts extends React.Component {
  render() {
    const { contacts, isLoading } = this.props;
    return (
      <div className="container" data-testid="contacts">
        <section className="contacts">
          <article className="contact" data-testid="contact">
            <span className="contact__avatar" />
            <span className="contact__data">Nome</span>
            <span className="contact__data">Telefone</span>
            <span className="contact__data">País</span>
            <span className="contact__data">Admissão</span>
            <span className="contact__data">Empresa</span>
            <span className="contact__data">Departamento</span>
          </article>
          {isLoading && (
            <div className="contacts__loading">
              <span>Carregando...</span>
            </div>
          )}
          {contacts &&
            contacts.map((contact) => (
              <Contact data={contact} key={contact.id} />
            ))}
        </section>
      </div>
    );
  }
}

export default Contacts;
