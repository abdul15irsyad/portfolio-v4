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
  }
  const menus: Menu[] = [
    { label: 'Home', href: '/' },
    { label: 'Portfolio', href: '/portfolio' },
    {
      logo: (
        <Image
          src="/icons/github.svg"
          alt="Github Logo"
          width={28}
          height={28}
        />
      ),
      href: '/portfolio',
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
            {menus.map(({ href, label, logo }, index) => (
              <Link key={index} href={href} className="nav-link">
                {label ?? logo}
              </Link>
            ))}
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
};
