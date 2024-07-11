'use client';

import dayjs from 'dayjs';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useCallback, useEffect, useState } from 'react';
import { Nav, Navbar as BootstrapNavbar, Offcanvas } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

import { navbarIconMenus, navbarMenus } from '@/data/navbar-menus.data';
import { capitalizeEachWord } from '@/utils/change-case';

export const Navbar = () => {
  const { t, i18n } = useTranslation();
  const rootPath = `/${usePathname().split('/')[1]}`;
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [show, setShow] = useState(false);
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

  const handleChangeLanguage = useCallback(
    (newLanguage: string) => {
      i18n.changeLanguage(newLanguage);
      dayjs.locale(newLanguage);
      setShow(false);
    },
    [i18n.language],
  );

  return (
    <BootstrapNavbar
      expand="lg"
      sticky="top"
      collapseOnSelect={true}
      className={isScrolled ? 'shrunk' : ''}
    >
      <div className="container-md">
        <Link href="/">
          <BootstrapNavbar.Brand className="d-flex align-items-center">
            <Image
              src="/favicon.jpg"
              alt="Portfolio Logo"
              width={24}
              height={24}
              className="me-2"
            />
            <strong className="text-primary">IRSYAD</strong>&nbsp;ABDUL
          </BootstrapNavbar.Brand>
        </Link>
        <BootstrapNavbar.Toggle
          className={!show ? 'collapsed' : ''}
          onClick={() => setShow(!show)}
        />
        <BootstrapNavbar.Offcanvas
          show={show}
          id="navbar-offcanvas"
          onHide={() => setShow(false)}
          style={{ border: 'none' }}
          placement="end"
        >
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
                  onClick={() => setShow(false)}
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
                    capitalizeEachWord(t(label))
                  )}
                </Nav.Link>
              ))}
              <Nav.Link
                onClick={() =>
                  handleChangeLanguage(i18n.language === 'en' ? 'id' : 'en')
                }
              >
                {i18n.language === 'en' ? 'ID' : 'EN'}
              </Nav.Link>
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
        </BootstrapNavbar.Offcanvas>
      </div>
    </BootstrapNavbar>
  );
};
