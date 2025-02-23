import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { sr } from './ScrollRevel';
import emailjs from '@emailjs/browser';

const Section = styled.section`
  padding-top: 15vh;
  padding-bottom: 15vh ;
`;

const SectionTitle = styled.h2`
  font-size: 3rem;
  text-align: center;
  margin-bottom: 3rem;
  color: #5b34ea;
`;

const FormContainer = styled.form`
  max-width: 500px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: start;

  @media (max-width: 1024px) {
    width: 80%;
    
  }
`;

const Label = styled.label`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  font-size: 1rem;
  margin-bottom: 1rem;
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 0.5rem;
  font-size: 1rem;
  margin-bottom: 1rem;
`;

const Button = styled.button`
display: inline-block;
margin-top: 2rem;
padding: 1rem 2rem;
background-color: #5b34ea;
color: #fff;
text-decoration: none;
text-transform: uppercase;
font-weight: bold;
border-radius: 5px;
box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
transition: background-color 0.3s ease-in-out;
cursor: pointer;
&:hover {
  transform: scale(1.1);
  background-color: #7354e8;
}
`;

function ContactForm({setActiveTab}) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  useEffect(()=>{
    sr.reveal(".homeImage", { interval: 400 });
    sr.reveal("#message", {});
    sr.reveal("#name", { delay: 500 });
    sr.reveal("#email", {});
    sr.reveal(".send", {});
  },[]);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_p2jliwh', 'template_fehnl6b', e.target, 'fM8Ya5y3E8YQhFSGA')
      .then(() => {
        alert('Email sent successfully!');
      })
      .catch((error) => {
        alert('Error sending email:', error);
      });

    // Clear form fields
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <Section id="contact">
    <SectionTitle>Contact</SectionTitle>
    <FormContainer onSubmit={handleSubmit}>
      <Label htmlFor="user_name">Name:</Label>
      <Input type="text" id="name" name="user_name" value={name} onChange={(e) => setName(e.target.value)} required />

      <Label htmlFor="user_email">Email:</Label>
      <Input type="email" id="email" name="user_email" value={email} onChange={(e) => setEmail(e.target.value)} required />

      <Label htmlFor="message">Message:</Label>
      <Textarea id="message" name="message" value={message} onChange={(e) => setMessage(e.target.value)} required />

      <Button className='send' type="submit">Send Message</Button>
    </FormContainer>
    </Section>
  );
}

export default ContactForm;
