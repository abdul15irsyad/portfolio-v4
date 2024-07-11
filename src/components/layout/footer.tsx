'use client';

import Link from 'next/link';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { contacts } from '@/data/contacts.data';
import { capitalize, capitalizeEachWord } from '@/utils/change-case';

import { Copyright } from './copyright';
import { QuoteOfTheDay } from './quote-of-the-day';

export const Footer = () => {
  const { t } = useTranslation();
  const footerContacts = contacts.filter(({ icon }) =>
    ['whatsapp', 'telegram', 'envelope'].includes(icon),
  );
  const followMe = contacts.filter(
    ({ icon }) => !['whatsapp', 'envelope', 'telegram'].includes(icon),
  );
  return (
    <>
      <QuoteOfTheDay />
      <footer>
        <div className="top">
          <div className="container">
            <div className="row">
              <div className="contacts col-lg-4 col-md-6 col-12">
                <h5>{capitalize(t('contact'))}</h5>
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
                <h5>{capitalizeEachWord(t('follow-me'))}</h5>
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
                <h5>{capitalize(t('address'))}</h5>
                <p>{t('my-address')}</p>
              </div>
            </div>
          </div>
        </div>
        <Copyright />
      </footer>
    </>
  );
};
