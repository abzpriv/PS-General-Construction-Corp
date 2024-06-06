import React from 'react';
import './Project.css';
import ProjectImage1 from './Pictures/Picture1.jpg';
import ProjectImage2 from './Pictures/Picture2.jpg';
import ProjectImage3 from './Pictures/Picture3.jpg';
import ProjectImage4 from './Pictures/Picture4.jpg';
import ProjectImage5 from './Pictures/Picture5.jpg';
import ProjectImage6 from './Pictures/Picture6.jpg';
import ProjectImage7 from './Pictures/Picture7.jpg';
import ProjectImage8 from './Pictures/Picture8.jpg';
import ProjectImage9 from './Pictures/Picture9.jpg';
import ProjectImage10 from './Pictures/Picture10.jpg';
import ProjectImage11 from './Pictures/Picture11.jpg';
import ProjectImage12 from './Pictures/Picture12.jpg';
import ProjectImage13 from './Pictures/Picture13.jpg';
import ProjectImage14 from './Pictures/Picture14.jpg';
import ProjectImage15 from './Pictures/Picture15.jpg';
import ProjectImage16 from './Pictures/Picture16.jpg';
import ProjectImage17 from './Pictures/Picture17.jpg';
import ProjectImage18 from './Pictures/Picture18.jpg';
import ProjectImage19 from './Pictures/Picture19.jpg';
import ProjectImage20 from './Pictures/Picture20.jpg';
import ProjectImage21 from './Pictures/Picture21.jpg';
import ProjectImage22 from './Pictures/Picture22.jpg';
import ProjectImage23 from './Pictures/Picture23.jpg';
import ProjectImage24 from './Pictures/Picture24.jpg';
import ProjectImage26 from './Pictures/Picture26.jpg';
import ProjectImage27 from './Pictures/Picture27.jpg';
import ProjectImage28 from './Pictures/Picture28.jpg';
import ProjectImage29 from './Pictures/Picture29.jpg';
import ProjectImage30 from './Pictures/Picture30.jpg';
import ProjectImage31 from './Pictures/Picture31.jpg';
import ProjectImage32 from './Pictures/Picture32.jpg';
import ProjectImage33 from './Pictures/Picture37.jpg';
import ProjectImage34 from './Pictures/Picture38.jpg';
import ProjectImage35 from './Pictures/Picture39.jpg';
import ProjectImage36 from './Pictures/Picture40.jpg';
import ProjectImage37 from './Pictures/Picture41.jpg';
import ProjectImage38 from './Pictures/Picture42.jpg';

const Projects = () => {
  const images = [
    ProjectImage1, ProjectImage2, ProjectImage3, ProjectImage4, ProjectImage5,
    ProjectImage6, ProjectImage7, ProjectImage8, ProjectImage9, ProjectImage10,
    ProjectImage11, ProjectImage12, ProjectImage13, ProjectImage14, ProjectImage15,
    ProjectImage16, ProjectImage17, ProjectImage18, ProjectImage19, ProjectImage20,
    ProjectImage21, ProjectImage22, ProjectImage23, ProjectImage24, 
    ProjectImage26, ProjectImage27, ProjectImage28, ProjectImage29, ProjectImage30,
    ProjectImage31, ProjectImage32, ProjectImage33, ProjectImage34, ProjectImage35,
    ProjectImage36, ProjectImage37, ProjectImage38
  ];

  return (
    <section className="projects-section">
      <h2>View Our Projects</h2>
      <div className="projects-container">
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Project ${index + 1}`} className="project-image" />
        ))}
      </div>
    </section>
  );
};

export default Projects;
