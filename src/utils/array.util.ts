import { randomInt } from './number.util';

export const random = <T>(array: T[]) => array[randomInt(0, array.length - 1)];
