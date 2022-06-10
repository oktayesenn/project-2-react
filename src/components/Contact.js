import React from 'react'
import './contact.css'

export default function Contact() {
  
  return (
    <div>
        <h1>Contact</h1>
        <p className='me'> My name is Oktay Esen.I am developer of this website. NYC base Full Stack Developer.You can contact me by email.</p>
        <p classname='me'>Loyalty bring SUCCESS</p>
        
        {/* <input type="text" placeholder="type" /> */}
        <a className='send' href='https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRpdDFBvLJZGgjZfBPsmStpztszwskwHTMdSlbSbBTMlZfRvRDlRtjrFGBCnJdLWZQsNtQq'>
         Click to send an email
        </a>
        
        <br />
    </div>
  )
}
