'use client';

import { BASE_URL } from '@/configs/app.config';
import { capitalizeEachWord } from '@/utils/change-case';
import Link from 'next/link';
import React, { useState } from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const BlogShare = ({
  url,
  title,
  tags,
}: {
  url: string;
  title?: string;
  tags?: string[];
}) => {
  const { t } = useTranslation();
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
    },
    {
      type: 'social-media',
      href: `https://www.linkedin.com/shareArticle?url=${url}`,
      icon: 'linkedin',
    },
    {
      type: 'social-media',
      href: `whatsapp://send?text=${text}`,
      icon: 'whatsapp',
    },
    {
      type: 'social-media',
      href: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
      icon: 'facebook',
    },
    {
      type: 'social-media',
      href: `https://twitter.com/intent/tweet?text=${text}`,
      icon: 'twitter-x',
    },
    {
      type: 'social-media',
      href: `https://t.me/share/url?url=${text}`,
      icon: 'telegram',
    },
  ];
  return links.map((link, index) => {
    return link.type === 'copy-link' ? (
      <OverlayTrigger
        key={index}
        overlay={<Tooltip>{capitalizeEachWord(t('link-copied'))}</Tooltip>}
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
