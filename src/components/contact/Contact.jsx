import React from "react";

import "./styles.scss";

class Contact extends React.Component {
  render() {
    const { contact } = this.props;
    const isHeader = this.props.isHeader;

    return (
      <>
        {isHeader && (
          <article className="contact" data-testid="contact">
            <span className="contact__avatar" />
            <span className="contact__data">Nome</span>
            <span className="contact__data">Telefone</span>
            <span className="contact__data">País</span>
            <span className="contact__data">Admissão</span>
            <span className="contact__data">Empresa</span>
            <span className="contact__data">Departamento</span>
          </article>
        )}

        {contact && (
          <article className="contact" data-testid="contact">
            <span className="contact__avatar">
              <img src={contact.avatar} alt={contact.name} />
            </span>
            <span className="contact__data">{contact.name}</span>
            <span className="contact__data">{contact.phone}</span>
            <span className="contact__data">{contact.country}</span>

            <span className="contact__data">
              {new Date(contact.admissionDate).toDateString()}
            </span>
            <span className="contact__data">{contact.company}</span>
            <span className="contact__data">{contact.department}</span>
          </article>
        )}
      </>
    );
  }
}

export default Contact;
