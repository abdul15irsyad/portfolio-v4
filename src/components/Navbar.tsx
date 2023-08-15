'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Container, Nav, Navbar as BootstrapNavbar } from 'react-bootstrap';

export default () => {
  interface Menu {
    label?: string;
    logo?: any;
    href: string;
    newTab?: boolean;
  }
  const menus: Menu[] = [
    { label: 'Home', href: '/' },
    { label: 'Work Experience', href: '/#experience' },
    { label: 'Programming', href: '/#programming' },
    { label: 'Portfolio', href: '/portfolio' },
    {
      logo: (
        <Image
          src="/icons/github.svg"
          alt="Github Logo"
          width={24}
          height={24}
        />
      ),
      href: 'https://github.com/abdul15irsyad',
      newTab: true,
    },
  ];
  return (
    <BootstrapNavbar
      expand="lg"
      sticky="top"
      bg="primary"
      data-bs-theme="dark"
      className="shadow-sm"
    >
      <Container>
        <Link href="/">
          <BootstrapNavbar.Brand>
            <strong>IRSYAD</strong> ABDUL
          </BootstrapNavbar.Brand>
        </Link>
        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {menus.map(({ href, label, logo, newTab }, index) => (
              <Link
                key={index}
                href={href}
                className="nav-link"
                target={newTab ? `_blank` : '_self'}
              >
                {label ?? logo}
              </Link>
            ))}
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
};
