'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

const BlogShare = ({ blogUrl }: { blogUrl: string }) => {
  const [copied, setCopied] = useState(false);
  const copyToClipboard = () => {
    if (!navigator.clipboard) return;
    navigator.clipboard.writeText(blogUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 1000);
  };
  const links = [
    {
      type: 'copy-link',
      href: '',
      icon: 'clipboard',
      tooltip: 'copy to clipboard',
    },
    {
      type: 'social-media',
      href: `https://www.linkedin.com/shareArticle?mini=true&url=${blogUrl}`,
      icon: 'linkedin',
      tooltip: 'share to Linkedin',
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
    {
      type: 'social-media',
      href: `https://t.me/share/url?url=${blogUrl}`,
      icon: 'telegram',
      tooltip: 'share to Telegram',
    },
  ];
  return links.map((link, index) => {
    return link.type === 'copy-link' ? (
      <OverlayTrigger
        key={index}
        overlay={<Tooltip>Copied</Tooltip>}
        placement="bottom"
        show={copied}
      >
        <button
          key={index}
          type="button"
          className="blog-detail-share-item"
          onClick={copyToClipboard}
          disabled={copied}
        >
          <i className={`bi bi-${copied ? 'check2' : 'clipboard'}`}></i>
        </button>
      </OverlayTrigger>
    ) : (
      <Link
        key={index}
        href={link.href!}
        target="_blank"
        className="blog-detail-share-item"
      >
        <i className={`bi bi-${link.icon}`}></i>
      </Link>
    );
  });
};

export default BlogShare;
