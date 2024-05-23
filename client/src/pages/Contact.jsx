import React, { useState, useEffect } from "react";
import { useAuth } from "../store/auth";

const defaultContactFormdata = {
  username: "",
  email: "",
  message: "",
};

const Contact = () => {
  const [contact, setContact] = useState(defaultContactFormdata);
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      setContact({
        username: user.username,
        email: user.email,
        message: "",
      });
    }
  }, [user]);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setContact((prevContact) => ({
      ...prevContact,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/form/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contact), 
      });
      if (response.ok) {
        setContact(defaultContactFormdata);
        const data = await response.json();
        console.log(data);
        alert("Message sent");
      } else {
        alert("Message not sent");
      }
    } catch (error) {
      alert("Message not sent");
      console.log(error);
    }
  };

  return (
    <>
      <section className="section-contact">
        <main>
          <div className="section-contact">
            <div className="container grid grid-two-cols">
              <div className="contact-img">
                <img
                  src="/images/support.png"
                  alt="24/7 support"
                  width={500}
                  height={500}
                />
              </div>
              <div className="contact-content container contact-form">
                <h1 className="main-heading mb-3">Contact Us</h1>
                <br />
                <form action="" onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="username">Username</label>
                    <input
                      type="text"
                      name="username"
                      placeholder="Username"
                      id="username"
                      required
                      autoComplete="off"
                      value={contact.username}
                      onChange={handleInput}
                    />
                  </div>
                  <div>
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      id="email"
                      required
                      autoComplete="off"
                      value={contact.email}
                      onChange={handleInput}
                    />
                  </div>
                  <div>
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      cols="30"
                      rows="10"
                      type="text"
                      name="message"
                      placeholder="Tell us your concern"
                      required
                      autoComplete="off"
                      value={contact.message}
                      onChange={handleInput}
                    ></textarea>
                  </div>
                  <div>
                    <button type="submit">Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </main>
      </section>
      <section className="mb-3">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58909.04820865264!2d87.7369666!3d22.6606661!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f808fcc853abdb%3A0xb7113f44ca31e963!2sGhatal%2C%20West%20Bengal%20721212!5e0!3m2!1sen!2sin!4v1713878080972!5m2!1sen!2sin"
          width="100%"
          height="450"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </>
  );
};

export default Contact;
