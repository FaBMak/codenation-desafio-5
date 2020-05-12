import React from "react";

import Contact from "../contact/Contact";

import "./styles.scss";

class Contacts extends React.Component {
  render() {
    const { contacts, isLoading } = this.props;
    return (
      <div className="container" data-testid="contacts">
        <section className="contacts">
          <Contact isHeader={true} />
          {isLoading && (
            <div className="contacts__loading">
              <span>Carregando...</span>
            </div>
          )}
          {contacts &&
            contacts.map((contact) => (
              <Contact contact={contact} key={contact.id} isHeader={false} />
            ))}
        </section>
      </div>
    );
  }
}

export default Contacts;
