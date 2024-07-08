import React, {useRef} from 'react';
import '../styles/Contact.css';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_7gt6arf', 'template_s8ym266', form.current, {
        publicKey: 'YOUR_PUBLIC_KEY',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className='contacts'>
        <h1>Contact</h1>
        <div className='contents'>
        <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type='text' placeholder='name' />
            <label>Email</label>
            <input type='email' placeholder='email'/>
            <label>Message</label>
            <textarea type='text' placeholder='write your message...' />
            <button type='submit'>Submit</button>
        </form>
        </div>
    </div>
  )
}

export default Contact