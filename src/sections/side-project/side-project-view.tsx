'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';

import { sideProjects } from '@/data/side-projects.data';
import { SideProjectItem } from '@/sections/side-project/side-project-item';
import { capitalizeEachWord } from '@/utils/change-case';

export const SideProjectView = () => {
  const { t } = useTranslation();
  return (
    <div className="side-project section doodle-background">
      <div className="container">
        <h1 className="title text-center">
          {capitalizeEachWord(t('side-project'))}
        </h1>
        <hr />
        <div className="row">
          {sideProjects.map((sideProject, index) => (
            <SideProjectItem key={index} {...sideProject} />
          ))}
        </div>
      </div>
    </div>
  );
};
