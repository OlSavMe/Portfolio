import React, { useState } from "react";
// import { Form, Button } from "react-bootstrap";
import axios from "axios";
import "../../styles/ContactForm.scss";

const ContactForm = () => {
  const [result, setResult] = useState(null);
  const [state, setState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const sendEmail = (event) => {
    event.preventDefault();
    axios
      .post("/send", { ...state })
      .then((response) => {
        setResult(response.data);
        setState({ name: "", email: "", message: "" });
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
    <div className="contact-form">
      {result ? (
        <p className={`${result.success ? "success" : "error"}`}>
          {result.message}
        </p>
      ) : (
        <p>Feel free to contact me!</p>
      )}
      <form onSubmit={sendEmail}>
        <label htmlFor="name">
          Name:{" "}
          <input
            type="text"
            name="name"
            value={state.name}
            onChange={onInputChange}
          />
        </label>
        <label htmlFor="email">
          Email:{" "}
          <input
            type="email"
            name="email"
            value={state.email}
            onChange={onInputChange}
          />
        </label>
        <label htmlFor="message">
          Message:
          <textarea
            type="message"
            name="message"
            value={state.message}
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
