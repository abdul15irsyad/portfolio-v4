'use client';

import CustomCarousel from '@/components/CustomCarousel';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Form } from 'react-bootstrap';

export const metadata: Metadata = {
  title: 'Portfolio - Irsyad Abdul',
  description: 'Irsyad Abdul Hamid Darussalam web portfolio',
};

const Portfolio = () => {
  const portfolios = [
    {
      title: 'Admin Panel SIPERDIK Aceh Tengah',
      href: null,
      year: 2021,
      type: 'Fullstack',
      desc: (
        <p>
          Pada project tersebut saya membuat admin panel untuk website SIPERDIK
          Aceh Tengah, dibuat menggunakan framework CodeIniter 4 dengan Database
          MySQL, untuk styling saya menggunakan Bootstrap 4, namun project
          tersebut belum dimigrasi ke domain yang diinginkan.
        </p>
      ),
      stacks: [
        { icon: '/programming/codeigniter.png', label: 'Codeigniter' },
        { icon: '/programming/bootstrap.png', label: 'Bootstrap 4' },
      ],
      images: [
        {
          src: '/portfolio/siperdik-1.png',
          alt: 'Siperdik 1',
        },
        {
          src: '/portfolio/siperdik-2.png',
          alt: 'Siperdik 2',
        },
      ],
    },
  ];
  return (
    <div className="portfolio section">
      <div className="container">
        <div className="row header">
          <div className="col">
            <h1 className="title">Portfolio</h1>
            <hr />
            <div className="filters">
              <div className="filter filter-year">
                <Form.Select aria-label="Default select example">
                  <option value="all" selected>
                    All Year
                  </option>
                  <option value="2021">2021</option>
                  <option value="2022">2022</option>
                  <option value="2023">2023</option>
                </Form.Select>
              </div>
              <div className="filter filter-year">
                <Form.Select aria-label="Default select example">
                  <option value="all" selected>
                    All Type
                  </option>
                  <option value="fullstack">Fullstack</option>
                  <option value="backend">Backend</option>
                  <option value="frontend">Frontend</option>
                </Form.Select>
              </div>
            </div>
          </div>
        </div>
        {portfolios.map(
          ({ title, href, year, type, images, desc, stacks }, index) => (
            <div key={index} className="row portfolio-item">
              <div className="col-md-6 col-12 portfolio-item-images">
                <CustomCarousel images={images} />
              </div>
              <div className="col-md-6 col-12 portfolio-item-detail">
                <h3 className="portfolio-item-title">
                  {href ? (
                    <Link href={href} target="_blank">
                      {title}
                    </Link>
                  ) : (
                    title
                  )}
                </h3>
                <div className="portfolio-item-metas">
                  <div className="portfolio-item-meta">{year}</div>
                  <span>-</span>
                  <div className="portfolio-item-meta">{type}</div>
                </div>
                <div className="portfolio-item-desc">{desc}</div>
                <div className="portfolio-item-stacks">
                  {stacks.map(({ icon, label }) => (
                    <div className="portfolio-item-stack">
                      <Image
                        src={icon}
                        alt={label}
                        width={28}
                        height={28}
                        title={label}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ),
        )}
      </div>
    </div>
  );
};

export default Portfolio;
