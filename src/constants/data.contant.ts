import dayjs from 'dayjs';

export const isIndependeceDay = dayjs().date() === 17 && dayjs().month() === 7;
