import { SideProject } from '@/types/side-project.type';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const SideProjectItem = ({ img, title, desc, href }: SideProject) => {
  return (
    <div className="col-md-4 col-sm-6 side-project-item">
      <Image
        src={img}
        className="side-project-img"
        alt={title}
        width={1080}
        height={1080}
      />
      <div className="side-project-text">
        <h3 className="side-project-title">{title}</h3>
        <p>{desc}</p>
        {href && (
          <Link href={href} target="_blank" className="btn btn-sm btn-primary">
            <span>See Side Project</span>
            <i className="bi bi-chevron-right ms-2" />
          </Link>
        )}
      </div>
    </div>
  );
};

export default SideProjectItem;
