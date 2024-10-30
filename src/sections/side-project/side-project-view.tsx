'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

import { Empty } from '@/components/empty/empty';
import {
  allStacks,
  sideProjects as allSideProjects,
} from '@/data/side-projects.data';
import { SideProjectItem } from '@/sections/side-project/side-project-item';
import { capitalizeEachWord } from '@/utils/change-case';

export const SideProjectView = () => {
  const { t } = useTranslation();
  const [sideProjects, setSideProjects] = useState(allSideProjects);
  const [stacks, setStacks] = useState(
    allStacks.map((stack) => ({ ...stack, isActive: false })),
  );

  useEffect(() => {
    const activeStacks = stacks.filter(({ isActive }) => isActive);
    if (activeStacks.length > 0) {
      setSideProjects(
        allSideProjects.filter((sideProject) =>
          activeStacks.every((activeStack) =>
            sideProject.stacks.find(({ icon }) => icon === activeStack.icon),
          ),
        ),
      );
    } else {
      setSideProjects(allSideProjects);
    }
  }, [stacks]);

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
              <OverlayTrigger
                key={index}
                overlay={<Tooltip id={`tooltip-${index}`}>{label}</Tooltip>}
                placement="bottom"
              >
                <div
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
              </OverlayTrigger>
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
      </div>
    </div>
  );
};
