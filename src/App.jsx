import React from "react";

//import apiContacts from "./data/contacts.json";

import "./App.scss";
import Contacts from "./components/contacts/Contacts";
import Filters from "./components/filters/Filters";
import Topbar from "./components/topbar/Topbar";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
      isLoading: true,
    };

    this.getApiContacts = this.getApiContacts.bind(this);
  }
  // usar arrow function para usar this
  getApiContacts = () => {
    //const { contacts, isLoading } = this.state;
    fetch("https://5e82ac6c78337f00160ae496.mockapi.io/api/v1/contacts")
      .then((response) => {
        if (response.status !== 200) {
          console.log("API not working? Status Code: " + response.status);
          return;
        }
        response.json().then((data) => {
          this.setState({
            contacts: data,
            isLoading: false,
          });
        });
      })
      .catch(function (err) {
        console.log("Fetch Error :-S", err);
      });
  };

  componentDidMount() {
    this.getApiContacts();
  }

  render() {
    return (
      <React.Fragment>
        <Topbar />
        <Filters />
        <Contacts
          contacts={this.state.contacts}
          isLoading={this.state.isLoading}
        />
      </React.Fragment>
    );
  }
}

export default App;
