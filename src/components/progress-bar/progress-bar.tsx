'use client';
import './progress-bar.css';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import nprogress from 'nprogress';
import { Suspense, useCallback, useEffect } from 'react';

export const ProgressBar = () => {
  const handleAnchorClick = useCallback((event) => {
    if (event.currentTarget.target === '_blank') return;

    const targetUrl = event.currentTarget.href;

    const currentUrl = window.location.href;

    if (targetUrl !== currentUrl) {
      nprogress.start();
    }
    console.log(ProgressBar.name, {
      targetUrl,
      currentUrl,
      condition: targetUrl !== currentUrl,
    });
  }, []);

  const handleMutation = useCallback(() => {
    const anchorElements = document.querySelectorAll('a[href]');

    const filteredAnchors = Array.from(anchorElements).filter((element) => {
      const href = element.getAttribute('href');
      return href && href.startsWith('/');
    });

    filteredAnchors.forEach((anchor) =>
      anchor.addEventListener('click', handleAnchorClick),
    );
  }, []);

  useEffect(() => {
    nprogress.configure({
      showSpinner: false,
      easing: 'ease',
      speed: 400,
    });
    const mutationObserver = new MutationObserver(handleMutation);
    mutationObserver.observe(document, { childList: true, subtree: true });
    window.history.pushState = new Proxy(window.history.pushState, {
      apply: (
        target,
        thisArg,
        argArray: [
          data: any,
          unused: string,
          url?: string | URL | null | undefined,
        ],
      ) => {
        nprogress.done();
        return target.apply(thisArg, argArray);
      },
    });
  }, []);

  return (
    <>
      <Suspense fallback={null}>
        <NProgressDone />
      </Suspense>
    </>
  );
};

const NProgressDone = () => {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    nprogress.done();
  }, [pathname, router, searchParams]);

  return null;
};