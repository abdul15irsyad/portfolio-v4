'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Typed from 'typed.js';

const Hero = () => {
  const socialMedias = [
    { icon: 'github', href: 'https://github.com/abdul15irsyad' },
    { icon: 'linkedin', href: 'https://linkedin.com/in/irsyad-abdul-hamid-d' },
    { icon: 'instagram', href: 'https://instagram.com/abdul15irsyad' },
    { icon: 'facebook', href: 'https://facebook.com/abdul15irsyad' },
  ];
  const typedText = useRef(null);
  useEffect(() => {
    const typed = new Typed(typedText.current, {
      strings: [
        'Fullstack Developer',
        'Backend Developer',
        'Frontend Developer',
      ],
      typeSpeed: 80,
      loop: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);
  const whatsappLink =
    'https://api.whatsapp.com/send?phone=6288809151020&text=Assalamualaikum';
  return (
    <div className="hero bg-light mb-0">
      <div className="container">
        <div className="row">
          <div className="col-md-6 hero-title align-self-center">
            <div className="social-media-wrapper">
              {socialMedias.map((socialMedia) => (
                <Link
                  href={socialMedia.href}
                  target="_blank"
                  className="social-media-item"
                >
                  <i className={`bi bi-${socialMedia.icon}`}></i>
                </Link>
              ))}
            </div>
            <h1 className="text-jumbo">Hello, im Irsyad Abdul</h1>
            <h4 className="mb-4 typed-text">
              <span ref={typedText}></span>
            </h4>
            <Link
              href={whatsappLink}
              target="_blank"
              className="btn btn-lg btn-primary contact-me border-pil"
            >
              Contact Me
              <i className="bi bi-whatsapp ms-2"></i>
            </Link>
          </div>
          <div className="col-md-6 hero-image mb-3">
            <Image src="/hero.png" alt="hero" width={400} height={400} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
