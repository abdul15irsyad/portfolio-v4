'use client';

import { navbarMenus } from '@/data/navbar-menus.data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

export default () => {
  return (
    <Navbar
      data-bs-theme="dark"
      expand="lg"
      sticky="top"
      bg="primary"
      className="shadow-md"
    >
      <div className="container">
        <Link href="/">
          <Navbar.Brand>
            <strong>IRSYAD</strong> ABDUL
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
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
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};
