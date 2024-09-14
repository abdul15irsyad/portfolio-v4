import { NextResponse } from 'next/server';

import { handleError } from '@/utils/error.util';

export async function GET() {
  try {
    return NextResponse.json({ message: 'api web portfolio' });
  } catch (error) {
    handleError(error);
    return NextResponse.json(
      {
        message: 'internal server error',
      },
      { status: 500 },
    );
  }
}
