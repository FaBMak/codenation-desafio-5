export default async function getContacts() {
  fetch("https://5e82ac6c78337f00160ae496.mockapi.io/api/v1/contacts")
    .then(function (response) {
      if (response.status !== 200) {
        console.log("API not working? Status Code: " + response.status);
        return;
      }
      response.json().then(function (data) {
        return data;
      });
    })
    .catch(function (err) {
      console.log("Fetch Error :-S", err);
    });
}
