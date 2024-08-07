import React from "react";
import { Footer, Navbar } from "../components";
import { useState } from "react";
const ContactPage = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform any necessary actions with the form data here
    console.log({ name, email, message });
    // Reset the form fields after submission
    setName('');
    setEmail('');
    setMessage('');
  }

  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Contact Us</h1>
        <hr />
        <div className="row my-4 h-100">
          <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
            <form action="">
              <div className="form my-3">
                <label htmlFor="">Name</label>
                <input
                  type="text"
                  className="form-control"
                  // id="Name"
                  placeholder="Enter Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form my-3">
                <label htmlFor="">Email</label>
                <input
                  type="email"
                  className="form-control"
                  // id="Email"
                  placeholder="Enter Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form  my-3">
                <label htmlFor="">Message</label>
                <textarea
                  rows={5}
                  className="form-control"
                  // id="Password"
                  placeholder="Enter Your Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
              <div className="text-center">
                <button
                  className="my-2 px-4 mx-auto btn btn-dark"
                  // type="submit"
                  onClick={handleSubmit}
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;
