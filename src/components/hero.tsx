'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Typed from 'typed.js';
import { contacts } from '@/data/contacts.data';
import { useTranslation } from 'react-i18next';
import { TextAnimation } from './text-animation';
import { capitalize, capitalizeEachWord } from '@/utils/change-case';

const Hero = () => {
  const typedText = useRef(null);
  const { t } = useTranslation();
  useEffect(() => {
    const typed = new Typed(typedText.current, {
      // strings: ['Fullstack Dev', 'Backend Dev', 'Frontend Dev', 'Freelancer'],
      strings: ['Web Developer', 'Bugbender', 'Freelancer'],
      typeSpeed: 100,
      loop: true,
    });

    return () => typed.destroy();
  }, []);
  // const whatsappLink = contacts.find((contact) => contact.icon === 'whatsapp')
  //   ?.href;
  const features = [
    { icon: '/icons/api.png', title: 'API' },
    { icon: '/icons/servers.png', title: 'ERD Database' },
    {
      icon: '/icons/puzzle.png',
      title: capitalizeEachWord(t('problem-solve')),
    },
  ];
  return (
    <div className="hero section mb-0 doodle-background" id="hero">
      <div className="container">
        <div className="row">
          <div
            className="col-md-6 hero-title align-self-center"
            data-aos="fade-right"
          >
            <div className="social-media-wrapper">
              {contacts
                .filter(({ icon }) => ['github', 'linkedin'].includes(icon))
                .map((socialMedia, index) => {
                  return socialMedia.href ? (
                    <Link
                      key={index}
                      href={socialMedia.href}
                      target="_blank"
                      className="social-media-item"
                    >
                      <i className={`bi bi-${socialMedia.icon}`}></i>
                    </Link>
                  ) : (
                    <div className="social-media-item">
                      <i className={`bi bi-${socialMedia.icon}`}></i>
                    </div>
                  );
                })}
            </div>
            {/* <h1 className="text-jumbo">
              {t('greeting', { name: 'Irsyad Abdul' })}
            </h1> */}
            <h1 className="text-jumbo">
              <TextAnimation
                text={capitalize(t('greeting', { name: 'Irsyad Abdul' }))}
              />
            </h1>
            <h4 className="mb-4 typed-text">
              <span ref={typedText}></span>
            </h4>
            {/* <Link
              href={whatsappLink!}
              target="_blank"
              className="btn contact-me px-3"
            >
              Hubungi Saya
              <i className="bi bi-whatsapp ms-2"></i>
            </Link> */}
            <Link
              href="/resume-irsyad-abdul.pdf"
              target="_blank"
              className="btn btn-primary text-capitalize px-3"
            >
              <i className="bi bi-filetype-pdf me-2"></i>
              {t('see-item', { item: t('resume') })}
            </Link>
          </div>
          <div className="col-md-6 hero-image mb-3">
            <Image
              src="/hero2.png"
              alt="hero"
              width={400}
              height={400}
              data-aos="fade-left"
            />
          </div>
        </div>
        <div className="features" data-aos="fade-up">
          {features.map(({ icon, title }, index) => (
            <div className="feature" key={index}>
              <div className="feature-icon">
                <Image src={icon} alt={title} width={40} height={40} />
              </div>
              <h6 className="feature-title">{title}</h6>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
