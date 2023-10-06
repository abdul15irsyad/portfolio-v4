import SideProjectItem from '@/components/side-project-item';
import { sideProjects } from '@/data/side-projects.data';
import React from 'react';

const SideProject = () => {
  return (
    <div className="side-project section doodle-background">
      <div className="container">
        <h1 className="title text-center">Side Project</h1>
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

export default SideProject;
