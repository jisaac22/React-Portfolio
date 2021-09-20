import React from "react";

export default function Contact() {
  return (
  <section>
    <h2>Contact</h2>
    <section>
    <div>
      <p className="name">Name:</p>
      <input className="nameInput" placeholder="Name"></input>
    </div>
    <div>
      <p className="email">Email:</p>
      <input className="emailInput" placeholder="Email"></input>
    </div>
    <div>
      <p className="message">Message:</p>
      <textarea className="messageInput" rows="4"></textarea>
    </div>
   </section>
  
  </section>
  )
}