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
