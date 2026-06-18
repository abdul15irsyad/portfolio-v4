'use client';

import DOMPurify from 'dompurify';
import { useMemo, useState } from 'react';
import truncate from 'truncate-html';

export const ReadMoreHtmlContent = ({
  fullHtml,
  maxLength = 300,
}: {
  fullHtml: string;
  maxLength?: number;
}) => {
  const [expanded, setExpanded] = useState(false);

  const { truncatedHtml, isTruncated } = useMemo(() => {
    const temp = document.createElement('div');
    temp.innerHTML = fullHtml;
    const plainText = temp.textContent || temp.innerText || '';
    const isOverLimit = plainText.length > maxLength;

    return {
      truncatedHtml: isOverLimit
        ? truncate(fullHtml, maxLength, { byWords: false })
        : fullHtml,
      isTruncated: isOverLimit,
    };
  }, [fullHtml, maxLength]);

  const safeHtml = DOMPurify.sanitize(expanded ? fullHtml : truncatedHtml);

  return (
    <div>
      <div
        className='default-text'
        dangerouslySetInnerHTML={{ __html: safeHtml }}
      />
      {isTruncated && (
        <a
          className='d-inline'
          onClick={() => setExpanded((v) => !v)}
          style={{ cursor: 'pointer' }}
        >
          {expanded ? 'read less' : 'read more'}
        </a>
      )}
    </div>
  );
};
