'use client';

import Link from 'next/link';
import React from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

const BlogShare = ({ blogUrl }: { blogUrl: string }) => {
  const links = [
    {
      type: 'copy-link',
      href: '',
      icon: 'clipboard',
      tooltip: 'copy to clipboard',
    },
    {
      type: 'social-media',
      href: `whatsapp://send?text=${blogUrl}`,
      icon: 'whatsapp',
      tooltip: 'share to Whatsapp',
    },
    {
      type: 'social-media',
      href: `https://www.facebook.com/sharer/sharer.php?u=${blogUrl}`,
      icon: 'facebook',
      tooltip: 'share to Facebook',
    },
    {
      type: 'social-media',
      href: `https://twitter.com/intent/tweet?text=${blogUrl}`,
      icon: 'twitter',
      tooltip: 'share to Twitter',
    },
  ];
  return (
    <>
      {links.map((link, index) => (
        <OverlayTrigger
          key={index}
          overlay={<Tooltip id={`tooltip-test`}>{link.tooltip}</Tooltip>}
          placement="bottom"
        >
          {link.type === 'copy-link' ? (
            <div className="blog-detail-share-item">
              <i className="bi bi-clipboard"></i>
            </div>
          ) : (
            <Link
              href={link.href!}
              target="_blank"
              className="blog-detail-share-item"
            >
              <i className={`bi bi-${link.icon}`}></i>
            </Link>
          )}
        </OverlayTrigger>
      ))}
    </>
  );
};

export default BlogShare;
