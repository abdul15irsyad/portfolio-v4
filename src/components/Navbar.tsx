'use client';

import { navbarMenus } from '@/data/navbar-menus.data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default () => {
  return (
    <nav
      data-bs-them="dark"
      className="shadow-sm navbar navbar-expand-lg navbar-light bg-primary sticky-top"
    >
      <div className="container">
        <Link href="/">
          <span className="navbar-brand">
            <strong>IRSYAD</strong> ABDUL
          </span>
        </Link>
        <button
          aria-controls="basic-navbar-nav"
          type="button"
          aria-label="Toggle navigation"
          className="navbar-toggler collapsed"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navbar-collapse collapse" id="basic-navbar-nav">
          <div className="navbar-nav ms-auto">
            {navbarMenus.map(({ href, label, logo, newTab }, index) => (
              <Link
                key={index}
                href={href}
                className="nav-link"
                target={newTab ? `_blank` : '_self'}
              >
                {logo ? (
                  <Image
                    src={logo}
                    alt={label}
                    title={label}
                    width={24}
                    height={24}
                  />
                ) : (
                  label
                )}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
