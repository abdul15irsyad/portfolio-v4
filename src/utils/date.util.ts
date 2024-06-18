import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(duration);
dayjs.extend(relativeTime);

export const renderTimestamp = (timestamp: string | Date) => {
  return dayjs().diff(timestamp, 'month') === 0
    ? dayjs(timestamp).fromNow()
    : dayjs(timestamp)
        .format(
          dayjs().year() === dayjs(timestamp).year() ? 'D MMMM' : 'D MMMM YYYY',
        )
        .toLowerCase();
};
