import { useState } from "react";
import emailjs from "emailjs-com";
import "./ContactMe.css";

export const ContactMe = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [statusMessage, setStatusMessage] = useState(""); // State for status message

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = "service_c42qn1h";
    const templateID = "template_b5921q2";
    const userID = "RlVVgtSPWENxO2iTP";

    // Reference to the form element
    const form = e.target;

    emailjs.sendForm(serviceID, templateID, form, userID).then(
      (response) => {
        console.log("Success!", response.status, response.text);
        setStatusMessage("Email has been sent successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
        });
      },
      (error) => {
        console.error("Failed...", error);
        setStatusMessage("Something went wrong. Please try again later.");
      }
    );

    // Clear the status message after 5 seconds
    setTimeout(() => {
      setStatusMessage("");
    }, 5000);
  };

  return (
    <section id="contact-form" className="contact-me">
      <div className="contact-title">
        <h2>Contact Me</h2>
        <p>
          I'm ready to bring my front-end skills to your team. Reach out today!
        </p>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="contact-form-row">
          <div>
            <label htmlFor="firstName">First Name</label>
            <br />
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="lastName">Last Name</label>
            <br />
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="contact-form-row">
          <div>
            <label htmlFor="email">Email</label>
            <br />
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="phone">Phone Number</label>
            <br />
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <br />
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required></textarea>
        </div>
        <div>
          <button className="button-link btn-submit" type="submit">
            Submit
          </button>
        </div>
      </form>

      {statusMessage && (
        <div
          className={`status-message ${
            statusMessage.includes("wrong") ? "error" : "success"
          }`}>
          <p>{statusMessage}</p>
        </div>
      )}
    </section>
  );
};
