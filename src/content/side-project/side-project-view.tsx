'use client';

import Image from 'next/image';
import React, { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

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
  const [page, setPage] = useState<number>(1);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [page]);
  const limit = 6;
  const [sideProjects, setSideProjects] = useState(
    paginatedArray(allSideProjects, { page, limit }),
  );
  const [totalAllData, setTotalAllData] = useState<number>(
    allSideProjects.length,
  );
  const [stacks, setStacks] = useState(
    allStacks.map((stack) => ({ ...stack, isActive: false })),
  );

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

  // on stack change
  useEffect(() => {
    const filteredSideProjects = filterSideProjects(allSideProjects);
    setPage(1);
    setSideProjects(paginatedArray(filteredSideProjects, { page: 1, limit }));
    setTotalAllData(filteredSideProjects.length);
  }, [filterSideProjects, stacks]);

  useEffect(() => {
    const filteredPortfolios = filterSideProjects(allSideProjects);
    setSideProjects(paginatedArray(filteredPortfolios, { page, limit }));
  }, [filterSideProjects, page]);

  return (
    <div className="side-project section doodle-background">
      <div className="container">
        <SectionTitle
          title={capitalizeEachWord(t('side-project'))}
          subTitle={t('side-project-desc')}
        />
        <div className="row justify-content-center">
          <div className="col-auto stacks">
            {stacks?.map(({ label, icon, isActive }, index) => (
              <div
                key={index}
                className={`stack ${isActive ? 'active' : ''}`}
                onClick={() =>
                  setStacks(
                    stacks.map((stack) =>
                      stack.icon === icon
                        ? { ...stack, isActive: !stack.isActive }
                        : stack,
                    ),
                  )
                }
              >
                <Image
                  src={icon}
                  alt={label}
                  width={100}
                  height={100}
                  loading="eager"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="row">
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
            position="center"
            currentPage={page}
            setCurrentPage={setPage}
            totalPage={Math.ceil(totalAllData / limit)}
          />
        )}
      </div>
    </div>
  );
};
