import Link from 'next/link';
import React from 'react';

const Footer = () => {
  const contacts = [
    {
      icon: 'whatsapp',
      label: '+62 888 0915 1020',
      href: 'https://api.whatsapp.com/send?phone=6288809151020&text=Assalamualaikum',
    },

    {
      icon: 'envelope',
      label: 'abdulirsyad15@gmail.com',
      href: 'mailto:abdulirsyad15@gmail.com',
    },
  ];
  const socialMedias = [
    { icon: 'github', href: 'https://github.com/abdul15irsyad' },
    { icon: 'linkedin', href: 'https://linkedin.com/in/irsyad-abdul-hamid-d' },
    { icon: 'instagram', href: 'https://instagram.com/abdul15irsyad' },
    { icon: 'facebook', href: 'https://facebook.com/abdul15irsyad' },
    { icon: 'twitter', href: 'https://twitter.com/abdulirsyad15' },
  ];
  return (
    <>
      <footer>
        <div className="top">
          <div className="container">
            <div className="row">
              <div className="contacts col-md-4 col-12">
                <h5>Contact</h5>
                <ul>
                  {contacts.map(({ icon, label, href }, index) => (
                    <Link key={index} href={href}>
                      <li>
                        <i className={`bi bi-${icon}`}></i>
                        <span>{label}</span>
                      </li>
                    </Link>
                  ))}
                </ul>
              </div>
              <div className="social-medias col-md-4 col-12">
                <h5>Follow me</h5>
                <ul>
                  {socialMedias.map(({ icon, href }, index) => (
                    <Link key={index} href={href}>
                      <li>
                        <i className={`bi bi-${icon}`}></i>
                      </li>
                    </Link>
                  ))}
                </ul>
              </div>
              <div className="address col-md-4 col-12">
                <h5>Address</h5>
                <p>Pamulang, South Tangerang City, Banten 15417</p>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright">
          <div className="container"></div>
          <div className="row">
            <span>
              &copy; Copyright abdul15irsyad {new Date().getFullYear()}. <br />
              All rights reserved
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
