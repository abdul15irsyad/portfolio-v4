'use client';

import { BASE_URL } from '@/configs/app.config';
import Link from 'next/link';
import React, { useState } from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

const BlogShare = ({
  url,
  title,
  tags,
}: {
  url: string;
  title?: string;
  tags?: string[];
}) => {
  url = `${BASE_URL}${url}`;
  title = title ?? '';
  tags = tags ?? [];
  const [copied, setCopied] = useState(false);
  const copyToClipboard = () => {
    if (!navigator.clipboard) return;
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 1000);
  };
  const text = `${encodeURIComponent(
    `${title}\n${
      tags.length > 0 ? `${tags?.map((tag) => `#${tag}`).join(' ')}\n` : ''
    }${url}`,
  )}`;
  const links = [
    {
      type: 'copy-link',
      href: '',
      icon: 'clipboard',
      tooltip: 'copy to clipboard',
    },
    {
      type: 'social-media',
      href: `https://www.linkedin.com/shareArticle?url=${url}`,
      icon: 'linkedin',
      tooltip: 'share to Linkedin',
    },
    {
      type: 'social-media',
      href: `whatsapp://send?text=${text}`,
      icon: 'whatsapp',
      tooltip: 'share to Whatsapp',
    },
    {
      type: 'social-media',
      href: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
      icon: 'facebook',
      tooltip: 'share to Facebook',
    },
    {
      type: 'social-media',
      href: `https://twitter.com/intent/tweet?text=${text}`,
      icon: 'twitter-x',
      tooltip: 'share to Twitter',
    },
    {
      type: 'social-media',
      href: `https://t.me/share/url?url=${text}`,
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
          className={`blog-detail-share-item ${link.icon}`}
          onClick={copyToClipboard}
          disabled={copied}
          style={{ cursor: !copied ? 'pointer' : 'default' }}
        >
          <i className={`bi bi-${copied ? 'check2' : 'clipboard'}`}></i>
        </button>
      </OverlayTrigger>
    ) : (
      <Link
        key={index}
        href={link.href!}
        target="_blank"
        className={`blog-detail-share-item ${link.icon}`}
      >
        <i className={`bi bi-${link.icon}`}></i>
      </Link>
    );
  });
};

export default BlogShare;
