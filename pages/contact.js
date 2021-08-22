import React, { useState } from 'react'
import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";

const Contact = () => {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null }
  })

  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleResponse = (status, msg) => {
    if (status === 200) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg }
      })
      setInputs({
        name: '',
        email: '',
        message: ''
      })
    } else {
      setStatus({
        info: { error: true, msg: msg }
      })
    }
  }

  const handleOnChange = e => {
    e.persist()
    setInputs(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }))
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null }
    })
  }

  const handleOnSubmit = async e => {
    e.preventDefault()
    setStatus(prevStatus => ({ ...prevStatus, submitting: true }))
    const res = await fetch('/api/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(inputs)
    })
    const text = await res.text()
    handleResponse(res.status, text)
  }

  return (
    <Layout contact>
      <Head>
      <title>{siteTitle}</title>
      </Head>
      <main>
        <h1 className="text-6xl text-center font-bold">Let's talk</h1>
        <p className="text-center text-xl md:text-3xl font-light italic pb-4 text-gray-600">I'd love to chat about your next project!</p>
        <p className="text-center text-lg p-6"> Please fill out this short contact form and I'll get back to you within two business days.</p>
      <form onSubmit={handleOnSubmit} action="/success">
      <div className="text-center my-4">
      <label htmlFor="name" className="px-4 text-xl">Name</label>
        <input
          id="name"
          type="name"
          onChange={handleOnChange}
          required
          value={inputs.name}
          placeholder="Name"
        className="focus:border-light-blue-500 focus:ring-1 focus:ring-light-blue-500 focus:outline-none w-full md:w-6/12 text-xl text-black placeholder-gray-700 border border-gray-300 rounded-md py-2 pl-4"/>
      </div>
      <div className="text-center my-4">
      <label htmlFor="email" className="px-4 text-xl">Email</label>
        <input
          id="email"
          type="email"
          onChange={handleOnChange}
          required
          value={inputs.email}
          placeholder="Email"
          className="focus:border-light-blue-500 focus:ring-1 focus:ring-light-blue-500 focus:outline-none w-full md:w-6/12 text-xl text-black placeholder-gray-700 border border-gray-300 rounded-md py-2 pl-4"/>
      </div>
      <div className="my-4">
        <label htmlFor="message" className="px-4 text-xl block text-center">Tell me about your project</label>
        <textarea
          id="message"
          onChange={handleOnChange}
          required
          value={inputs.message}
          placeholder="About your project..."
          className="focus:border-light-blue-500 focus:ring-1 focus:ring-light-blue-500 focus:outline-none w-full md:w-8/12 text-xl text-black placeholder-gray-700 border border-gray-300 rounded-md py-2 pl-4 block m-auto"/>
        </div>
        <div className="text-center my-4">
        <button type="submit" disabled={status.submitting} className="btn-outline text-2xl no-underline">
          {!status.submitting
            ? !status.submitted
              ? 'Submit'
              : 'Submitted'
            : 'Submitting...'}
        </button>
        </div>
      </form>
      {status.info.error && (
        <div className="error">Error: {status.info.msg}</div>
      )}
      {!status.info.error && status.info.msg && (
        <div className="success">{status.info.msg}</div>
      )}
    </main>
    </Layout>
  )
}

export default Contact;