import React, { useState } from "react";
// import { Form, Button } from "react-bootstrap";
import axios from "axios";

const ContactForm = () => {
  const [result, setResult] = useState(null);
  const [state, setState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const sendEmail = (event) => {
    event.preventDefault();
    axios
      .post("/send", { ...state })
      .then((response) => {
        setResult(response.data);
        setState({ name: "", email: "", subject: "", message: "" });
      })
      .catch(() => {
        setResult({ success: false, message: "Something went wrong" });
      });
  };

  const onInputChange = (event) => {
    const { name, value } = event.target;

    setState({
      ...state,
      [name]: value,
    });
  };

  return (
    <div>
      <form onSubmit={sendEmail}>
        <label htmlFor="name">
          Name:{" "}
          <input
            type="text"
            name="name"
            value={state.name}
            placeholder="Enter your full name"
            onChange={onInputChange}
          />
        </label>
        <label htmlFor="email">
          Email:{" "}
          <input
            type="email"
            name="email"
            value={state.email}
            placeholder="Enter your email"
            onChange={onInputChange}
          />
        </label>
        <label htmlFor="message">
          Message:
          <textarea
            type="message"
            name="message"
            value={state.message}
            rows="3"
            placeholder="Enter your message"
            onChange={onInputChange}
          ></textarea>
        </label>
        <div>
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
