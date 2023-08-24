'use client';

import { navbarMenus } from '@/data/navbar-menus.data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { usePathname } from 'next/navigation';

export default () => {
  const rootPath = `/${usePathname().split('/')[1]}`;
  return (
    <Navbar
      data-bs-theme="dark"
      expand="lg"
      sticky="top"
      bg="primary"
      collapseOnSelect={true}
    >
      <div className="container">
        <Link href="/">
          <Navbar.Brand className="d-flex align-items-center">
            <Image
              src="/favicon-portfolio.png"
              alt="Portfolio Logo"
              width={24}
              height={24}
              className="me-2"
            />
            <strong>IRSYAD</strong>&nbsp;ABDUL
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {navbarMenus.map(({ href, label, logo, newTab }, index) => (
              <Nav.Link
                key={index}
                href={href}
                target={newTab ? '_blank' : '_self'}
                as={Link}
                active={rootPath === href}
                // as={
                //   !['/#programming', '/#experience'].find(
                //     (item) => item === href,
                //   )
                //     ? Link
                //     : undefined
                // }
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
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};
