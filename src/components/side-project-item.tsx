'use client';

import { SideProject } from '@/types/side-project.type';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import AOS from 'aos';
import { aosInitConfig } from '@/configs/aos.config';

const SideProjectItem = ({ img, title, desc, href, stacks }: SideProject) => {
  useEffect(() => {
    AOS.init(aosInitConfig);
  });
  return (
    <div className="col-xl-4 col-md-6 side-project-item" data-aos="fade-up">
      {href ? (
        <div className="side-project-img-wrapper">
          <div className="overlay">
            <Link href={href} target="_blank" className="btn btn-sm btn-open">
              Lihat <i className="bi bi-box-arrow-up-right ms-2"></i>
            </Link>
          </div>
          <Image
            src={img}
            className="side-project-img"
            alt={title}
            width={1080}
            height={1080}
          />
        </div>
      ) : (
        <Image
          src={img}
          className="side-project-img"
          alt={title}
          width={1080}
          height={1080}
        />
      )}
      <div className="side-project-text">
        {href ? (
          <Link href={href} target="_blank" className="side-project-title">
            {title}
          </Link>
        ) : (
          <h3 className="side-project-title">{title}</h3>
        )}
        <p>{desc}</p>
        <div className="side-project-stacks">
          {stacks.map(({ icon, label }, index) => (
            <OverlayTrigger
              key={index}
              overlay={<Tooltip id={`tooltip-${index}`}>{label}</Tooltip>}
              placement="bottom"
            >
              <div className="side-project-stack">
                <Image src={icon} alt={label} width={24} height={24} />
              </div>
            </OverlayTrigger>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideProjectItem;
