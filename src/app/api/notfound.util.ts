import { NextResponse } from 'next/server';

export const notfound = () =>
  NextResponse.json({ message: 'not found' }, { status: 404 });
