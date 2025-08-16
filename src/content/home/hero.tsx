'use client';

import dayjs from 'dayjs';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useMemo, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import Typed from 'typed.js';

import { TextAnimation } from '@/components/text-animation/text-animation';
import { contacts } from '@/data/contacts.data';
import { capitalize } from '@/utils/change-case';

const Hero = () => {
  const typedText = useRef(null);
  const { t } = useTranslation();
  const isIndependenceDay = useMemo(
    () => dayjs().date() === 17 && dayjs().month() === 7,
    [],
  );
  console.log('isIndependenceDay', isIndependenceDay);
  console.log('dayjs().date()', dayjs().date());
  console.log('dayjs().date() === 17', dayjs().date() === 17);
  console.log('dayjs().month()', dayjs().month());
  console.log('dayjs().month() === 7', dayjs().month() === 7);
  useEffect(() => {
    const typed = new Typed(typedText.current, {
      // strings: ['Fullstack Dev', 'Backend Dev', 'Frontend Dev', 'Freelancer'],
      strings: [
        'Fullstack Dev',
        'Web Dev',
        'Bugbender',
        'Freelancer',
        'Software Engineer',
      ],
      typeSpeed: 100,
      loop: true,
    });

    return () => typed.destroy();
  }, []);
  // const whatsappLink = contacts.find(
  //   (contact) => contact.icon === 'whatsapp',
  // )?.href;
  // const sribuLink = {
  //   icon: '/icons/sribu.png',
  //   label: 'Hire Me on Sribu',
  //   href: 'https://www.sribu.com/id/users/abdul15irsyad',
  // };
  // const fiverrLink = {
  //   icon: '/icons/fiverr.png',
  //   label: 'Hire Me on Fiverr',
  //   href: 'https://www.fiverr.com/irsyadabdul?public_mode=true',
  // };
  const features = [
    { icon: '/icons/system-design.png', title: 'System Design' },
    { icon: '/icons/api.png', title: 'Backend' },
    { icon: '/icons/servers.png', title: 'Database' },
    { icon: '/icons/web-design.png', title: 'Web Design' },
    // {
    //   icon: '/icons/puzzle.png',
    //   title: capitalizeEachWord(t('problem-solve')),
    // },
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
                .map(({ href, icon, label }, index) => {
                  return href ? (
                    <Link
                      key={index}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-media-item"
                      aria-label={`go to ${icon}`}
                      title={label}
                    >
                      <i className={`bi bi-${icon}`}></i>
                    </Link>
                  ) : (
                    <div className="social-media-item" key={index}>
                      <i className={`bi bi-${icon}`}></i>
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
            <div className="d-flex flex-wrap justify-content-center justify-content-md-start gap-2">
              <Link
                href="/my-resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-primary text-capitalize px-3 hire-me"
              >
                <i className="bi bi-filetype-pdf me-2"></i>
                {t('see-item', { item: t('resume') })}
              </Link>
              {/* <Link
                href={whatsappLink!}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary contact-me px-3"
              >
                <i className="bi bi-whatsapp me-2"></i>
                <span>{capitalizeEachWord(t('contact-me'))}</span>
              </Link> */}
              {/* {[fiverrLink, sribuLink].map(({ href, icon, label }, index) => (
                <Link
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-primary hire-me"
                >
                  <img src={icon} alt="hire me logo" />
                  <span>{label}</span>
                </Link>
              ))} */}
            </div>
          </div>
          <div className="col-md-6 hero-image mb-3">
            {isIndependenceDay ? (
              <Image
                src={'/indonesia-flag-hero.png'}
                alt="hero"
                width={400}
                height={400}
                data-aos="fade-left"
                priority
                style={{
                  transform: 'rotate(8deg)',
                }}
              />
            ) : (
              <Image
                src={'/hero3.png'}
                alt="hero"
                width={400}
                height={400}
                data-aos="fade-left"
                priority
              />
            )}
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
