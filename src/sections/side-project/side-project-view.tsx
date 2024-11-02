'use client';

import Image from 'next/image';
import React, { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Empty } from '@/components/empty/empty';
import { Pagination } from '@/components/pagination/pagination';
import {
  allStacks,
  sideProjects as allSideProjects,
} from '@/data/side-projects.data';
import { SideProjectItem } from '@/sections/side-project/side-project-item';
import { SideProject } from '@/types/side-project.type';
import { paginatedArray } from '@/utils/array.util';
import { capitalizeEachWord } from '@/utils/change-case';

export const SideProjectView = () => {
  const { t } = useTranslation();
  const [page, setPage] = useState<number>(1);
  const currentPage = page;
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
    setSideProjects(paginatedArray(filteredSideProjects, { page, limit }));
    setTotalAllData(filteredSideProjects.length);
  }, [stacks]);

  useEffect(() => {
    const filteredPortfolios = filterSideProjects(allSideProjects);
    setSideProjects(paginatedArray(filteredPortfolios, { page, limit }));
  }, [page]);

  return (
    <div className="side-project section doodle-background">
      <div className="container">
        <h1 className="title text-center">
          {capitalizeEachWord(t('side-project'))}
        </h1>
        <hr />
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
                <Image src={icon} alt={label} width={100} height={100} />
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
            activePage={page}
            setPage={({ page }) => {
              if (currentPage !== page) {
                setPage(page);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
            totalPage={Math.ceil(totalAllData / limit)}
          />
        )}
      </div>
    </div>
  );
};
