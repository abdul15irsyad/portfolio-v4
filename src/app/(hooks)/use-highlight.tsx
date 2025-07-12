'use client';

import 'highlight.js/styles/androidstudio.css';
import 'highlightjs-copy/dist/highlightjs-copy.min.css';

import hljs from 'highlight.js';
import CopyButtonPlugin from 'highlightjs-copy';
import { useEffect } from 'react';

hljs.configure({
  ignoreUnescapedHTML: true,
});
hljs.addPlugin(
  new CopyButtonPlugin({
    hook: (text: string, el: any) => {
      if (el.result.language === 'bash') {
        text = text.replace('$ ', '');
        text = text.replace(/\n\$\ /g, '\n');
      }
      return text;
    },
  }),
);

export const useHighlight = () => {
  useEffect(() => {
    document.querySelectorAll('[data-highlighted="yes"]').forEach((block) => {
      block.removeAttribute('data-highlighted');
    });
    hljs.highlightAll();
  }, []);
};
