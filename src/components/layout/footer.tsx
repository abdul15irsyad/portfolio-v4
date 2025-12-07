'use client';

import Link from 'next/link';

import { useTranslation } from 'react-i18next';

import { contacts } from '@/data/contacts.data';
import { capitalize, capitalizeEachWord } from '@/utils/change-case';

import { Copyright } from './copyright';
import { QuoteOfTheDay } from './quote-of-the-day';

export const Footer = () => {
  const { t } = useTranslation();
  const footerContacts = contacts.filter(({ icon }) =>
    ['whatsapp', 'envelope'].includes(icon),
  );
  const followMe = contacts.filter(
    ({ icon }) => !['whatsapp', 'envelope'].includes(icon),
  );
  return (
    <>
      <QuoteOfTheDay />
      <footer>
        <div className='top'>
          <div className='container'>
            <div className='row'>
              <div className='contacts col-lg-4 col-md-6 col-12'>
                <h5>{capitalize(t('contact'))}</h5>
                <ul>
                  {footerContacts.map(({ icon, label, href }, index) => {
                    return href ? (
                      <li key={index}>
                        <Link
                          href={href}
                          target='_blank'
                          rel='noopener noreferrer'
                          aria-label={`go to ${icon}`}
                        >
                          <i className={`bi bi-${icon}`}></i>
                          <span>{label}</span>
                        </Link>
                      </li>
                    ) : (
                      <li key={index}>
                        <i className={`bi bi-${icon}`}></i>
                        <span>{label}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className='social-medias col-lg-4 col-md-6 col-12'>
                <h5>{capitalizeEachWord(t('follow-me'))}</h5>
                <ul>
                  {followMe.map(({ icon, label, href }, index) => (
                    <li key={index} title={label}>
                      {href ? (
                        <Link
                          href={href}
                          target='_blank'
                          rel='noopener noreferrer'
                          aria-label={`go to ${icon}`}
                        >
                          <i className={`bi bi-${icon}`}></i>
                        </Link>
                      ) : (
                        <i className={`bi bi-${icon}`}></i>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
              <div className='address col-md-4 col-12'>
                <h5>{capitalize(t('address'))}</h5>
                <Link
                  href='https://maps.app.goo.gl/XnjKvJvMHUTCN8TQ9'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  {t('my-address')}
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Copyright />
      </footer>
    </>
  );
};
