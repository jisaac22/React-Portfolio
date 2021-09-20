import React from "react";

export default function Contact() {

  const submitHandler = () =>{
   const nameInput = document.querySelector('.nameInput')
  //  const emailInput = document.querySelector('.emailInput')
   const messageInput = document.querySelector('.messageInput')
   const errorInfo = document.querySelector('.errorInfo')
   if (!nameInput.value || !messageInput.value){
     errorInfo.textContent = 'Missing Information '
   }
   
  }

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
    <div> 
      <button className="btn" onClick={submitHandler}>Submit</button>
      <p className="errorInfo"></p>
    </div>
   </section>
  
  </section>
  )
}