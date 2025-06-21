export const calculateMinutesRead = ({
  text,
  wordsPerMinute = 200,
}: {
  text: string;
  wordsPerMinute?: number;
}): number => {
  const wordCount = text.split(/\s+/).length;
  return Math.ceil(wordCount / wordsPerMinute);
};

export const parseBooleanString = (booleanString?: string) => {
  return isBooleanString(booleanString)
    ? Boolean(JSON.parse(booleanString!))
    : false;
};

export const isBooleanString = (value: unknown): boolean => {
  return typeof value === 'string' && (value === 'true' || value === 'false');
};
