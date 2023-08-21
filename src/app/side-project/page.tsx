import SideProjectItem from '@/components/SideProjectItem';
import { sideProjects } from '@/data/side-projects.data';
import React from 'react';

const SideProject = () => {
  return (
    <div className="side-project section">
      <div className="container">
        <h1 className="title text-center">Side Project</h1>
        <hr />
        <div className="row">
          {sideProjects.map((sideProject) => (
            <SideProjectItem {...sideProject} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideProject;
