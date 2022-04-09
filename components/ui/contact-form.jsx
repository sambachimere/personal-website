import React, { useState } from 'react';
import axios from 'axios';

const ContactForm = ({ texts }) => {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });
  const [inputs, setInputs] = useState({
    name: '',
    company: '',
    email: '',
    phoneNumber: '',
    message: '',
  });

  const handleServerResponse = (ok, msg) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
      });
      setInputs({
        name: '',
        company: '',
        email: '',
        phoneNumber: '',
        message: '',
      });
    } else {
      setStatus({
        info: { error: true, msg: msg },
      });
    }
  };
  const handleOnChange = (e) => {
    e.persist();
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
    axios({
      method: 'POST',
      url: 'https://formspree.io/f/xeqnrool',
      data: inputs,
    })
      .then((response) => {
        handleServerResponse(true, 'Thank you, your message has been submitted.');
      })
      .catch((error) => {
        handleServerResponse(false, error.response.data.error);
      });
  };

  return (
    <main>
      <form onSubmit={handleOnSubmit}>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 px-4">
            <div className="mb-6">
              {/* <label htmlFor="name">Name</label> */}
              <input
                className="input-field dark:bg-grey"
                id="name"
                type="text"
                onChange={handleOnChange}
                required
                value={inputs.name}
                placeholder={texts.inputOne}
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 px-4">
            <div className="mb-6">
              {/* <label htmlFor="company">Company</label> */}
              <input
                className="input-field dark:bg-grey"
                id="company"
                type="text"
                onChange={handleOnChange}
                value={inputs.company}
                placeholder={texts.inputTwo}
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 px-4">
            <div className="mb-6">
              {/* <label htmlFor="email">Email</label> */}
              <input
                className="input-field dark:bg-grey"
                id="email"
                type="email"
                name="_replyto"
                onChange={handleOnChange}
                required
                value={inputs.email}
                placeholder={texts.inputThree}
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 px-4">
            <div className="mb-6">
              {/* <label htmlFor="phoneNumber">Phone Number</label> */}
              <input
                className="input-field dark:bg-grey"
                id="phoneNumber"
                type="number"
                onChange={handleOnChange}
                value={inputs.phoneNumber}
                placeholder={texts.inputFour}
              />
            </div>
          </div>
          <div className="w-full px-4">
            <div className="mb-6">
              {/* <label htmlFor="message">Message</label> */}
              <textarea
                className="input-field resize-none dark:bg-grey"
                rows="4"
                id="message"
                name="message"
                onChange={handleOnChange}
                required
                value={inputs.message}
                placeholder={texts.inputFive}
              />
            </div>
          </div>
          <div className="w-full px-4">
            <div className="pt-4 text-center">
              <button
                className="
                inline-flex
                justify-center
                items-center
                py-4
                px-9
                rounded-full
                font-semibold
                text-white
                bg-primary
                mx-auto
                transition
                duration-300
                ease-in-out
                hover:shadow-signUp hover:bg-opacity-90
              "
                type="submit"
                disabled={status.submitting}
              >
                {!status.submitting
                  ? !status.submitted
                    ? texts.buttonTextOne
                    : texts.buttonTextTwo
                  : texts.buttonTextThree}
              </button>
            </div>
          </div>
        </div>
      </form>
      {status.info.error && <div className="error">Error: {status.info.msg}</div>}
      {!status.info.error && status.info.msg && <p>{status.info.msg}</p>}
    </main>
  );
};

export default ContactForm;
