import React from "react";

class Contact extends React.Component {
  render() {
    const { data } = this.props;
    //const isHeader = this.props.isHeader;

    return (
      <>
        {data && (
          <article className="contact" data-testid="contact">
            <span className="contact__avatar">
              <img src={data.avatar} alt={data.name} />
            </span>
            <span className="contact__data">{data.name}</span>
            <span className="contact__data">{data.phone}</span>
            <span className="contact__data">{data.country}</span>

            <span className="contact__data">
              {new Date(data.admissionDate).toDateString()}
            </span>
            <span className="contact__data">{data.company}</span>
            <span className="contact__data">{data.department}</span>
          </article>
        )}
      </>
    );
  }
}

export default Contact;
