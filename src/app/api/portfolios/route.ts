import { NextRequest, NextResponse } from 'next/server';

import { portfolios } from '@/data/portfolios.data';
import { paginatedArray, searchInArray } from '@/utils/array.util';
import { handleError } from '@/utils/error.util';

export const GET = async (req: NextRequest) => {
  try {
    let allData = portfolios;
    const { searchParams } = new URL(req.url);
    const search = searchParams.get('search');
    const page = searchParams.get('page') ? +searchParams.get('page')! : 1;
    const limit = searchParams.get('limit') ? +searchParams.get('limit')! : 10;
    const type = searchParams.get('type') ?? 'all';
    const year = searchParams.get('year') ?? 'all';

    if (search) allData = searchInArray(allData, { search, fields: ['title'] });
    if (type || year) {
      allData = allData.filter(
        (data) =>
          (year !== 'all' ? data.year === +year : true) &&
          (type !== 'all' ? data.type.label?.toLowerCase() === type : true),
      );
    }

    const totalAllData = allData.length;
    const paginatedData = paginatedArray(allData, {
      page,
      limit,
    });

    return NextResponse.json({
      message: 'get portfolios',
      meta: {
        totalData: paginatedData.length,
        totalAllData,
        currentPage: page,
        totalPage: Math.ceil(totalAllData / paginatedData.length),
      },
      data: paginatedData,
    });
  } catch (error) {
    handleError(error);
    return NextResponse.json(
      {
        message: 'internal server error',
      },
      { status: 500 },
    );
  }
};
