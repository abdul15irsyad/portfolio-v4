import { load } from 'cheerio';
import puppeteer from 'puppeteer';

export const extractSeoData = async (url: string) => {
  try {
    const dynamicPageDomains: string[] = [];
    const parsedUrl = new URL(url);
    let $: any;
    const isDynamicPage = dynamicPageDomains.includes(
      parsedUrl.hostname.toLowerCase(),
    );
    if (isDynamicPage) {
      const browser = await puppeteer.launch();
      const page = await browser.newPage();
      await page.goto(url, { waitUntil: 'networkidle0' });
      const html = await page.content();
      $ = load(html);
      await browser.close();
    } else {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(
          `error fetching url: ${url}, status code: ${response.status}`,
        );
      }
      const html = await response.text();
      $ = load(html);
    }

    const title = $('title')?.text().trim();
    const desc = $('meta[property="og:description"]').attr('content')?.trim();
    const image = $('meta[property="og:image"]').attr('content')?.trim();

    const data = {
      title,
      desc,
      image,
      url,
    };

    return data;
  } catch (error: any) {
    console.error(`error fetching SEO data: ${error?.message ?? error}`);
    return { url };
  }
};
