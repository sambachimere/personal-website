import React, { useState } from 'react';
import axios from 'axios';

const EmailForm = ({ texts }) => {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });
  const [inputs, setInputs] = useState({
    email: '',
  });

  const handleServerResponse = (ok, msg) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
      });
      setInputs({
        email: '',
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
      url: 'https://formspree.io/f/xknyvojg',
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
      <form className="relative max-w-[480px] mx-auto" onSubmit={handleOnSubmit}>
        <input
          className="
            w-full
            rounded-full
            border
            border-white
            border-opacity-[13%]
            bg-white
            bg-opacity-[15%]
            px-8
            py-4
            text-white
            placeholder-white
            placeholder-opacity-70
            outline-none
            focus-visible:shadow-none
            focus:border-opacity-100
            transition text-center
            sm:text-left
            mb-5
            sm:mb-0
          "
          id="email"
          type="email"
          name="_replyto"
          onChange={handleOnChange}
          required
          value={inputs.email}
          placeholder={texts.inputPlaceholder}
        />

        <button
          className="
            bg-white
            text-primary
            rounded-full
            font-semibold
            text-base
            py-4
            sm:py-[10px]
            px-5 w-full
            sm:w-auto sm:absolute
            right-2 top-2
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
      </form>
      {status.info.error && <div className="error">Error: {status.info.msg}</div>}
      {!status.info.error && status.info.msg && <p>{status.info.msg}</p>}
    </main>
  );
};

export default EmailForm;
