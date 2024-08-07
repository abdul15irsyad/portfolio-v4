import { load } from 'cheerio';

import { handleError } from './error.util';

export const extractSeoData = async (url: string) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(
        `error fetching url: ${url}, status code: ${response.status}`,
      );
    }
    const html = await response.text();
    const $ = load(html);

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
    handleError(error);
    return { url };
  }
};
