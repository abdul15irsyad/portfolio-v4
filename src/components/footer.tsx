import { contacts } from '@/data/contacts.data';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  const footerContacts = contacts.filter(({ icon }) =>
    ['whatsapp', 'telegram', 'envelope'].includes(icon),
  );
  const followMe = contacts.filter(
    ({ icon }) => !['whatsapp', 'envelope', 'telegram'].includes(icon),
  );
  return (
    <>
      <footer>
        <div className="top">
          <div className="container">
            <div className="row">
              <div className="contacts col-lg-4 col-md-6 col-12">
                <h5>Kontak</h5>
                <ul>
                  {footerContacts.map(({ icon, label, href }, index) => {
                    return href ? (
                      <Link key={index} href={href} target="_blank">
                        <li>
                          <i className={`bi bi-${icon}`}></i>
                          <span>{label}</span>
                        </li>
                      </Link>
                    ) : (
                      <li key={index}>
                        <i className={`bi bi-${icon}`}></i>
                        <span>{label}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="social-medias col-lg-4 col-md-6 col-12">
                <h5>Ikuti Saya</h5>
                <ul>
                  {followMe.map(({ icon, label, href }, index) => {
                    return href ? (
                      <Link key={index} href={href} target="_blank">
                        <li title={label}>
                          <i className={`bi bi-${icon}`}></i>
                        </li>
                      </Link>
                    ) : (
                      <li title={label}>
                        <i className={`bi bi-${icon}`}></i>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="address col-md-4 col-12">
                <h5>Alamat</h5>
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
