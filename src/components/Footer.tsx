import { contacts } from '@/data/contacts.data';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  const footerContacts = contacts.filter(({ icon }) =>
    ['whatsapp', 'envelope'].find((item) => item === icon),
  );
  const followMe = contacts.filter(
    ({ icon }) => !['whatsapp', 'envelope'].find((item) => item === icon),
  );
  return (
    <>
      <footer>
        <div className="top">
          <div className="container">
            <div className="row">
              <div className="contacts col-md-4 col-12">
                <h5>Contact</h5>
                <ul>
                  {footerContacts.map(({ icon, label, href }, index) => (
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
                  {followMe.map(({ icon, label, href }, index) => (
                    <Link key={index} href={href} title={label}>
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