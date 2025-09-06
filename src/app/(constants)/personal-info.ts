import dayjs from 'dayjs';

export const yearsOfExperience = dayjs().diff('2020-08-22', 'years') ?? 4;
