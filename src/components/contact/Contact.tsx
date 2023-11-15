import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { Form, Button } from 'react-bootstrap';

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    // @ts-ignore
    emailjs.sendForm('service_c0t8iga', 'template_6kx9a6g', form.current, '3AzAwP5ty9bDdIdJU')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      })
    form.current?.reset()
  };
  return (
    <section id='contact'>
      <div className="section-title">
        <h2>Contact</h2>
      </div>
      <div className='row justify-content-center'>
        <Form ref={form} onSubmit={sendEmail} data-bs-theme="dark" className='col-10 col-md-10'>
          <Form.Group className='mb-3 mb-md-4'>
            <Form.Label className='fw-bold'>Your Name</Form.Label>
            <Form.Control type='text' placeholder='Enter Your Name' className='p-3'></Form.Control>
          </Form.Group>
          <Form.Group className='mb-3 mb-md-4'>
            <Form.Label className='fw-bold'>Your Email</Form.Label>
            <Form.Control type='email' placeholder='Enter Your Email' className='p-3'></Form.Control>
          </Form.Group>
          <Form.Group className='mb-3 mb-md-4'>
            <Form.Label className='fw-bold'>Your Message</Form.Label>
            <Form.Control as='textarea' rows={3} placeholder='Enter Your Message' className='p-3'>
            </Form.Control>
          </Form.Group>
          <Button variant="outline-light" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </section>
  )
}
