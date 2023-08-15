import ReactGA from 'react-ga';

export const initGA = () => {
  const trackingId = process.env.NEXT_PUBLIC_GA_TRACKING_ID;
  ReactGA.initialize(trackingId ?? '');
};

export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};
