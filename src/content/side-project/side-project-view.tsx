'use client';

import Image from 'next/image';
import { parseAsInteger, useQueryState } from 'nuqs';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { ClearButton } from '@/components/clear-button';
import { Empty } from '@/components/empty/empty';
import { Pagination } from '@/components/pagination/pagination';
import { SectionTitle } from '@/components/section-title/section-title.component';
import { SideProjectItem } from '@/content/side-project/side-project-item';
import {
  allStacks,
  sideProjects as allSideProjects,
} from '@/data/side-projects.data';
import { SideProject } from '@/types/side-project.type';
import { paginatedArray } from '@/utils/array.util';
import { capitalizeEachWord } from '@/utils/change-case';

export const SideProjectView = () => {
  const { t } = useTranslation();
  const [page, setPage] = useQueryState('page', parseAsInteger.withDefault(1));
  const limit = 6;
  const [sideProjects, setSideProjects] = useState(
    paginatedArray(allSideProjects, { page, limit }),
  );
  const [totalAllData, setTotalAllData] = useState<number>(
    allSideProjects.length,
  );
  const [activeStacks, setActiveStacks] = useState<string[]>([]);
  const [stacks, setStacks] = useState(
    allStacks.map((stack) => ({
      ...stack,
      isActive: activeStacks?.includes(stack.label),
    })),
  );
  useEffect(() => {
    setStacks((stacks) =>
      stacks.map((stack) =>
        activeStacks?.includes(stack.slug)
          ? { ...stack, isActive: true }
          : { ...stack, isActive: false },
      ),
    );
  }, [activeStacks]);
  const filterSideProjects = useCallback(
    (sideProjects: SideProject[]) => {
      const activeStacks = stacks.filter(({ isActive }) => isActive);
      return activeStacks.length > 0
        ? sideProjects.filter((sideProject) =>
            activeStacks.every((activeStack) =>
              sideProject.stacks.find(({ icon }) => icon === activeStack.icon),
            ),
          )
        : sideProjects;
    },
    [stacks],
  );

  const isFirstRender = useRef(true);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [page]);

  // on stack change
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    const filteredSideProjects = filterSideProjects(allSideProjects);
    setPage(1);
    setSideProjects(paginatedArray(filteredSideProjects, { page: 1, limit }));
    setTotalAllData(filteredSideProjects.length);
  }, [filterSideProjects, stacks, setPage]);

  useEffect(() => {
    const filteredPortfolios = filterSideProjects(allSideProjects);
    setSideProjects(paginatedArray(filteredPortfolios, { page, limit }));
  }, [filterSideProjects, page]);

  return (
    <div className='side-project section doodle-background'>
      <div className='container'>
        <SectionTitle
          title={capitalizeEachWord(t('side-project'))}
          subTitle={t('side-project-desc')}
        />
        <div className='row justify-content-center'>
          <div className='col-auto stacks user-select-none'>
            {stacks?.map(({ label, icon, slug, isActive }, index) => (
              <div
                key={index}
                className={`stack ${isActive ? 'active' : ''}`}
                onClick={() =>
                  // setStacks(
                  //   stacks.map((stack) =>
                  //     stack.icon === icon
                  //       ? { ...stack, isActive: !stack.isActive }
                  //       : stack,
                  //   ),
                  // )
                  setActiveStacks((value) => {
                    return value?.includes(slug)
                      ? value?.filter((t) => t !== slug)
                      : [...(value ?? []), slug];
                  })
                }
              >
                <Image
                  src={icon}
                  alt={label}
                  width={100}
                  height={100}
                  loading='eager'
                />
              </div>
            ))}
          </div>
          <div
            className='col-12 text-center'
            style={{
              visibility:
                (activeStacks ?? []).length > 0 ? 'visible' : 'hidden',
            }}
          >
            <ClearButton onClick={() => setActiveStacks([])} />
          </div>
        </div>
        <div className='row'>
          {sideProjects.length > 0 ? (
            sideProjects?.map((sideProject, index) => (
              <SideProjectItem key={index} {...sideProject} />
            ))
          ) : (
            <div style={{ padding: '2rem 1rem' }}>
              <Empty />
            </div>
          )}
        </div>
        {totalAllData > 0 && (
          <Pagination
            position='center'
            currentPage={page}
            setCurrentPage={setPage}
            totalPage={Math.ceil(totalAllData / limit)}
          />
        )}
      </div>
    </div>
  );
};
