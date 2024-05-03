'use client';

import { navbarIconMenus, navbarMenus } from '@/data/navbar-menus.data';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { Nav, Navbar, Offcanvas } from 'react-bootstrap';
import { usePathname } from 'next/navigation';

export default () => {
  const rootPath = `/${usePathname().split('/')[1]}`;
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      if (scrollTop > 50) setIsScrolled(true);
      else if (scrollTop <= 0) setIsScrolled(false);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Navbar
      expand="lg"
      sticky="top"
      collapseOnSelect={true}
      className={`${isScrolled ? 'shrunk' : ''}`}
    >
      <div className="container-lg">
        <Link href="/">
          <Navbar.Brand className="d-flex align-items-center">
            <Image
              src="/favicon.jpg"
              alt="Portfolio Logo"
              width={24}
              height={24}
              className="me-2"
            />
            <strong>IRSYAD</strong>&nbsp;ABDUL
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle />
        <Navbar.Offcanvas id="navbar-offcanvas" placement="end">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title></Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
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
            <Nav className="navbar-icon-menu">
              {navbarIconMenus.map(({ href, label, logo, newTab }, index) => (
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
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </div>
    </Navbar>
  );
};
