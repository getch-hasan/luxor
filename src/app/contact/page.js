import ContactBanner from '@/components/contact/ContactBanner';
import ContactForm from '@/components/contact/ContactForm';
import ContactMap from '@/components/contact/ContactMao';
import React from 'react';

const Contact = () => {
  return (
    <div>
    <ContactBanner></ContactBanner>
    <ContactForm></ContactForm>
    <ContactMap></ContactMap>
    </div>
  );
};

export default Contact;