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
  try {
    const { t } = useTranslation();
    url = `${BASE_URL}${url}`;
    title = title ?? '';
    tags = tags ?? [];
    const [copied, setCopied] = useState(false);
    const copyToClipboard = () => {
      if (!navigator?.clipboard) return;
      navigator?.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 1000);
    };
    const text = `${title}\n${
      tags.length > 0 ? `${tags?.map((tag) => `#${tag}`).join(' ')}\n` : ''
    }${url}`;
    const encodedText = encodeURIComponent(text);
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
        href: `whatsapp://send?text=${encodedText}`,
        icon: 'whatsapp',
      },
      {
        type: 'social-media',
        href: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
        icon: 'facebook',
      },
      {
        type: 'social-media',
        href: `https://twitter.com/intent/tweet?text=${encodedText}`,
        icon: 'twitter-x',
      },
      {
        type: 'social-media',
        href: `https://t.me/share/url?url=${encodedText}`,
        icon: 'telegram',
      },
      {
        type: 'social-media',
        href: `https://threads.net/intent/post?text=${encodedText}`,
        icon: 'threads',
      },
    ];

    if (navigator?.canShare({ title })) {
      links.push({
        type: 'share',
        href: '',
        icon: 'share',
      });
    }

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
      ) : link.type === 'share' ? (
        <button
          key={index}
          type="button"
          className={`blog-detail-share-item ${link.icon}`}
          onClick={async () => {
            try {
              if (navigator?.canShare({ title })) return;
              const shareData: ShareData = {
                title,
                text,
                url,
              };
              await navigator?.share(shareData);
            } catch (error) {
              console.error(error);
            }
          }}
        >
          <i className={`bi bi-${link.icon}`}></i>
        </button>
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
  } catch (error) {
    console.error(error);
  }
};

export default BlogShare;
