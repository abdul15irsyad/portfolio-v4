'use client';

import Image from 'next/image';
import { parseAsInteger, useQueryState } from 'nuqs';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import slugify from 'slugify';

import { ClearButton } from '@/components/clear-button';
import { Empty } from '@/components/empty/empty';
import { Pagination } from '@/components/pagination/pagination';
import { SectionTitle } from '@/components/section-title/section-title.component';
import { SideProjectItem } from '@/content/side-project/side-project-item';
import { sideProjects } from '@/data/side-projects.data';
import { SideProject } from '@/types/side-project.type';
import { paginatedArray } from '@/utils/array.util';
import { capitalizeEachWord } from '@/utils/change-case';

export const SideProjectView = () => {
  const { t } = useTranslation();
  const [page, setPage] = useQueryState('page', parseAsInteger.withDefault(1));
  const limit = 6;
  const [filteredSideProjects, setFilteredSideProjects] =
    useState(sideProjects);
  const paginatedSideProjects = useMemo(
    () => paginatedArray(filteredSideProjects, { page, limit }),
    [filteredSideProjects, page],
  );
  const [activeStacks, setActiveStacks] = useState<string[]>([]);
  const getSlugFromStackIcon = useCallback(
    (icon: string) => slugify(icon.split('/').pop()!.split('.')[0]!),
    [],
  );
  const stacks = useMemo(
    () =>
      filteredSideProjects
        .reduce((prev: SideProject['stacks'], curr) => {
          return [
            ...prev,
            ...(curr.stacks?.filter(
              (stack) => !prev.find(({ icon }) => icon === stack.icon),
            ) ?? []),
          ];
        }, [])
        .map((stack) => ({
          ...stack,
          slug: getSlugFromStackIcon(stack.icon),
        }))
        .sort((a, b) => (a.slug < b.slug ? -1 : 1)),
    [filteredSideProjects, getSlugFromStackIcon],
  );

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [page]);

  useEffect(() => {
    setPage(1);
    setFilteredSideProjects(
      activeStacks.length > 0
        ? sideProjects.filter((sideProject) =>
            activeStacks.every((activeStack) =>
              sideProject.stacks.find(
                (stack) => getSlugFromStackIcon(stack.icon) === activeStack,
              ),
            ),
          )
        : sideProjects,
    );
  }, [activeStacks, getSlugFromStackIcon, setPage]);

  return (
    <div className='side-project section doodle-background'>
      <div className='container'>
        <SectionTitle
          title={capitalizeEachWord(t('side-project'))}
          subTitle={t('side-project-desc')}
        />
        <div className='row justify-content-center'>
          <div className='col-auto stacks user-select-none'>
            {stacks?.map(({ label, icon, slug }, index) => {
              return (
                <div
                  key={index}
                  className={`stack ${activeStacks?.includes(slug) ? 'active' : ''}`}
                  onClick={() =>
                    setActiveStacks((prev) => {
                      return prev?.includes(slug)
                        ? prev?.filter((t) => t !== slug)
                        : [...(prev ?? []), slug];
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
              );
            })}
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
          {paginatedSideProjects.length > 0 ? (
            paginatedSideProjects?.map((sideProject, index) => (
              <SideProjectItem key={index} {...sideProject} />
            ))
          ) : (
            <div style={{ padding: '2rem 1rem' }}>
              <Empty />
            </div>
          )}
        </div>
        {filteredSideProjects.length > 0 && (
          <Pagination
            position='center'
            currentPage={page}
            setCurrentPage={setPage}
            totalPage={Math.ceil(filteredSideProjects.length / limit)}
          />
        )}
      </div>
    </div>
  );
};
