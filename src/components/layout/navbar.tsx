'use client';

import dayjs from 'dayjs';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useCallback, useEffect, useState } from 'react';
import {
  Nav,
  Navbar as BootstrapNavbar,
  Offcanvas,
  OverlayTrigger,
  Stack,
  Tooltip,
} from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

import { navbarIconMenus, navbarMenus } from '@/data/navbar-menus.data';
import { capitalizeEachWord } from '@/utils/change-case';

export const Navbar = () => {
  const { t, i18n } = useTranslation();
  const rootPath = `/${usePathname().split('/')[1]}`;
  const [isShrunk, setIsShrunk] = useState<boolean>(false);
  const [show, setShow] = useState(false);
  const [lastScrollY, setLastScrollY] = useState<number>(0);
  const [isVisible, setIsVisible] = useState(true);

  const checkShrunk = useCallback(() => {
    const scrollTop = document.documentElement.scrollTop;
    if (scrollTop > 50) setIsShrunk(true);
    else if (scrollTop <= 0) setIsShrunk(false);
  }, []);
  useEffect(() => checkShrunk(), [checkShrunk]);

  const checkVisible = useCallback(() => {
    // visible
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY) setIsVisible(false);
    else setIsVisible(true);
    setLastScrollY(currentScrollY);
  }, [lastScrollY]);

  const handleScroll = useCallback(() => {
    checkShrunk();
    checkVisible();
  }, [checkShrunk, checkVisible]);
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll, lastScrollY]);

  const handleChangeLanguage = useCallback(
    (newLanguage: string) => {
      i18n.changeLanguage(newLanguage);
      dayjs.locale(newLanguage);
      setShow(false);
    },
    [i18n],
  );

  return (
    <BootstrapNavbar
      expand='lg'
      sticky='top'
      collapseOnSelect={true}
      className={`${isShrunk ? 'shrunk' : ''} ${isVisible ? 'visible' : ''}`}
    >
      <div className='container-md'>
        <Link href='/'>
          <BootstrapNavbar.Brand className='d-flex align-items-center'>
            <Image
              priority
              src='/me2.jpg'
              alt='Portfolio Logo'
              width={1080}
              height={1080}
              className='me-2'
            />
            <span>
              <strong className='text-primary'>IRSYAD</strong>
              <span>&nbsp;ABDUL</span>
            </span>
          </BootstrapNavbar.Brand>
        </Link>
        <BootstrapNavbar.Toggle
          className={!show ? 'collapsed' : ''}
          onClick={() => setShow(!show)}
        />
        <BootstrapNavbar.Offcanvas
          show={show}
          id='navbar-offcanvas'
          onHide={() => setShow(false)}
          style={{ border: 'none' }}
          placement='end'
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title></Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className='mx-auto'>
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
            </Nav>
            <Nav className='navbar-icon-menu'>
              <Stack direction='horizontal'>
                {[
                  { image: 'bahasa.jpg', lang: 'id', label: 'Bahasa' },
                  { image: 'english.jpg', lang: 'en', label: 'English' },
                ].map(({ image, lang, label }, index) => (
                  <OverlayTrigger
                    key={index}
                    overlay={<Tooltip>{label}</Tooltip>}
                    placement='bottom'
                  >
                    <Image
                      className={`nav-link-language ${i18n.language === lang ? 'active' : ''}`}
                      onClick={() => handleChangeLanguage(lang)}
                      src={`/country/${image}`}
                      alt={label}
                      width={120}
                      height={120}
                    />
                  </OverlayTrigger>
                ))}
              </Stack>
              {navbarIconMenus.map(
                ({ href, label, logo, newTab, onClick }, index) =>
                  href ? (
                    <Nav.Link
                      key={index}
                      href={href}
                      target={newTab ? '_blank' : '_self'}
                      as={Link}
                      active={rootPath === href}
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
                  ) : (
                    <Image
                      key={index}
                      className='nav-link-language'
                      onClick={onClick}
                      src={logo!}
                      alt={label}
                      title={label}
                      width={120}
                      height={120}
                    />
                  ),
              )}
            </Nav>
          </Offcanvas.Body>
        </BootstrapNavbar.Offcanvas>
      </div>
    </BootstrapNavbar>
  );
};
