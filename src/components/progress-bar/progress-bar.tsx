'use client';

import './progress-bar.css';

import { usePathname, useSearchParams } from 'next/navigation';
import nProgress from 'nprogress';
import { Suspense, useCallback, useEffect, useRef } from 'react';

export const ProgressBar = () => {
  const observerRef = useRef<MutationObserver | null>(null);

  const handleAnchorClick = useCallback((event: Event) => {
    const anchor = event.currentTarget as HTMLAnchorElement;

    // Don't trigger for new tab / middle-click
    if (
      anchor.target === '_blank' ||
      (event as MouseEvent).metaKey ||
      (event as MouseEvent).ctrlKey ||
      (event as MouseEvent).shiftKey ||
      (event as MouseEvent).button === 1
    )
      return;

    const currentUrl = window.location.href;
    const targetUrl = anchor.href;

    if (targetUrl !== currentUrl) {
      nProgress.start();
    }
  }, []);

  const attachClickListeners = useCallback(() => {
    const anchors = Array.from(
      document.querySelectorAll<HTMLAnchorElement>('a[href^="/"]'),
    );
    anchors.forEach((anchor) => {
      anchor.removeEventListener('click', handleAnchorClick);
      anchor.addEventListener('click', handleAnchorClick);
    });
  }, [handleAnchorClick]);

  useEffect(() => {
    nProgress.configure({
      showSpinner: false,
      easing: 'ease',
      speed: 400,
    });

    attachClickListeners();

    const observer = new MutationObserver(attachClickListeners);
    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    observerRef.current = observer;

    // Patch pushState to trigger nProgress.done()
    const originalPushState = history.pushState;
    history.pushState = function (...args) {
      nProgress.done();
      return originalPushState.apply(this, args as any);
    };

    return () => {
      observer.disconnect();
      observerRef.current = null;
    };
  }, [attachClickListeners]);

  return (
    <Suspense fallback={null}>
      <NProgressDone />
    </Suspense>
  );
};

const NProgressDone = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    nProgress.done();
  }, [pathname, searchParams]);

  return null;
};
