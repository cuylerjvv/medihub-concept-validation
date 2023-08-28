'use client'

import { useState } from "react"

export default function Contact_form() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const formSubmitHandler = async (event) => {
    event.preventDefault()
    console.log("Sending")

    try {
      const res = await fetch('api/contact', {
        method: 'POST',
        body: JSON.stringify({
          name,
          email,
          message
        }),
        headers: {
          'content-type': 'application/json'
        }
      });

      if (res.status === 200) {
        alert('Message sent!');
        // Set the inputs to empty.
        setName('');
        setEmail('');
        setMessage('');
      } else {
        alert('Response failed with status code:', res.status);
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className=" px-4 md:px-4 lg:px-6 pt-16 pb-16 lg:pt-20 lg:pb-20">
      <div className="border-2 border-borders rounded-xl mx-auto max-w-xl py-6 lg:py-6 px-2 md:px-4">
        <div className=" font-montserrat font-semibold text-primary text-2xl md:text-3xl flex justify-center ">
          <h1>Any questions?</h1>
        </div>
        <div className="pt-4 ">
          <hr className='divide-primary align-middle' />
        </div>

        <form onSubmit={formSubmitHandler}>
          <div className="flex flex-col gap-y-4 my-4">
            <div className="flex flex-col">
              <label
                className=" font-inter font-semibold text-primary text-md flex justify-left"
                htmlFor="name">Name</label>
              <input
                value={name}
                onChange={(event) => (
                  setName(event.target.value)
                )}
                type="text"
                placeholder="Full name"
                className="bg-slate-200 rounded-lg font-inter p-2"
              ></input>
            </div>

            <div className="flex flex-col">
              <label
                className="font-inter font-semibold text-primary text-md flex justify-left"
                htmlFor="email">Email</label>
              <input
                value={email}
                onChange={(event) => (
                  setEmail(event.target.value)
                )}
                type="email"
                placeholder="Enter your email"
                className="bg-slate-200 rounded-lg font-inter p-2"
              ></input>
            </div>

            <div className="flex flex-col">
              <label
                className="font-inter font-semibold text-primary text-md flex justify-left"
                htmlFor="message">Message</label>
              <textarea
                value={message}
                onChange={(event) => (
                  setMessage(event.target.value)
                )}
                type="text"
                placeholder="Your message or question"
                rows='5'
                className="bg-slate-200 rounded-lg font-inter p-2"
              ></textarea>
            </div>
          </div>


          <div className="flex justify-center">
            <button
              className='font-inter flex justify-center border-2 border-primary bg-primary hover:bg-blue-600 text-white font-semibold w-56 py-1 px-4 rounded-lg shadow-md focus:outline-none focus:ring focus:ring-blue-300'
              type="submit">Submit</button>
          </div>

        </form>

      </div>

    </div>
  )
}
