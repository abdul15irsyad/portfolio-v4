'use client';

import { useEffect } from 'react';

let initialized = false;

export const useHighlight = () => {
  useEffect(() => {
    const init = async () => {
      const hljs = (await import('highlight.js')).default;
      await import('highlight.js/styles/androidstudio.css');

      if (!initialized) {
        hljs.configure({
          ignoreUnescapedHTML: true,
        });
        await import('highlightjs-copy/dist/highlightjs-copy.min.css');
        // eslint-disable-next-line @typescript-eslint/no-require-imports
        const CopyButtonPlugin = require('highlightjs-copy');
        hljs.addPlugin(
          new CopyButtonPlugin({
            hook: (text: string, el: any) => {
              if (el.result.language === 'bash') {
                text = text.replace('$ ', '');
                text = text.replace(/\n\$/g, '\n');
              }
              return text;
            },
          }),
        );
        initialized = true;
      }
      document.querySelectorAll('[data-highlighted="yes"]').forEach((block) => {
        block.removeAttribute('data-highlighted');
      });
      hljs.highlightAll();
    };
    init();
  }, []);
};
